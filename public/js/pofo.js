(($)=>{
  
  class Pofo {

    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.section7();
      this.section8();
      this.section9();
      this.goTop();
      this.quick();
    }
    header(){
      let t=false;  // 태블릿, 모바일
      let t2=false; // pc
      // 헤더 스크롤 이벤트
      let oldTop=null;
      let newTop=null;
      let result='';      

          $(window).scroll(function(){
            newTop=$(window).scrollTop();
            result=oldTop-newTop>0?'UP':'DOWN'
            
              if(result==='DOWN'){
                $('#header').removeClass('show');                
                $('#header').addClass('hide');
              }

              if(result==='UP'){
                $('#header').removeClass('hide');
                $('#header').addClass('show');
              }            
            
              if($(window).scrollTop()===0){
                $('#header').removeClass('show');
              }
              
              oldTop=newTop;
          });

      // 모바일 메뉴 버튼
      $('.mobile-btn').on({
        click:function(){
          $(this).toggleClass('on');
          $('#nav').stop().slideToggle(300);
        }
      })

      // 기본값
      $('.sub').stop().slideUp(0);

      // 반응형
      $(window).resize(function(){
        resizeNav()
      });

      // 반응형 네비게이션 
      function resizeNav(){        
        if( $(window).width()<=1024 ){
            $('.mobile-btn').removeClass('on');
            $('#nav').stop().hide();
            t2=false; // 데스크탑 토글 초기화
              if(t===false){
                t=true;
                //마우스 오버 이벤트 삭제
                $('.sub').stop().fadeOut(0);    
                $('.main-btn').off('mouseenter');   
                $('.main-btn').bind({
                    click: function(){                      
                      $(this).next().stop().slideToggle(300); 
                    }
                });
              }  

        }
        else {
          $('.mobile-btn').removeClass('on');
          $('#nav').stop().show();
          t=false; // 모바일 토글 초기화
          if(t2===false){
              t2=true;
              // 마우스 오버 이벤트 삭제           
              $('.main-btn').off('click');
              $('.main-btn').on('mouseenter');
              $('.sub').stop().slideUp(0);
          
              $('.main-btn').on({
                  mouseenter: function(){
                    $('.sub').fadeOut(0); 
                    $(this).next().fadeIn(300); 
                  }
              });

              $('#nav').on({
                  mouseleave: function(){
                    $('.sub').fadeOut(300); 
                  }
              });
                    
              $('.sub-btn').on({
                  mouseenter: function(){
                    $('.sub-sub').fadeOut(0); 
                    $(this).next().fadeIn(300); 
                  }
              });

              $('.col24').on({
                  mouseleave: function(){
                    $('.sub-sub').fadeOut(300); 
                  }
              });
          }   
        }
      }
      resizeNav();

    }
    section1(){
      let cnt=0;
      let setId=0;
      let setId2=0;
      let touchStart=null;
      let touchEnd=null;
      let result='';
      let dragStart=null;
      let dragEnd=null;
      let mouseDown=false;
      let winW=$(window).width();

          // 반응형 너비
          $(window).resize(function(){
            winW=$(window).width();
            mainSlide();
            return winW
          });
          // 메인 슬라이드 함수
          function mainSlide(){
            $('.slide-wrap').stop().animate({left:-winW*cnt},600,'easeInOutExpo', function(){
              cnt>2?cnt=0:cnt;
              cnt<0?cnt=2:cnt;
              $('.slide-wrap').stop().animate({left:-winW*cnt},0);
            })
          }
          // 다음 카운트 함수
          function nextCount(){
            cnt++;
            mainSlide();
          }
          // 이전 카운트 함수
          function prevCount(){
            cnt--;
            mainSlide();
          }
          // 자동 타이머 함수
          function autoTimer(){
            setId=setInterval(nextCount, 3000);
          }
          autoTimer();
          // 타이머컨트롤 함수
          function timerfn(){
            let tcnt=0;
            clearInterval(setId);
            clearInterval(setId2);
            setId2=setInterval(function(){
              tcnt++;              
              if(tcnt>=5){
                clearInterval(setId2);                
                autoTimer();
              }                            
            }, 1000);
          }

          $('.slide-container').on({
            mousedown:function(e){ // 데스크탑 이벤트
              timerfn();              
              touchStart=e.clientX;              
              dragStart=e.clientX-$('.slide-wrap').offset().left-1903;
              mouseDown=true;
            },
            mouseup:function(e){
              touchEnd=e.clientX;
              result=touchStart-touchEnd>0?'NEXT':'PREV'

                if(result==='NEXT'){
                  if(!$('.slide-wrap').is(':animated')){
                    nextCount();
                  }
                }

                if(result==='PREV'){
                  if(!$('.slide-wrap').is(':animated')){
                    prevCount();
                  }
                }

                mouseDown=false;
            },
            mouseleave:function(e){
              if(!mouseDown){return;}
              touchEnd=e.clientX;
              result=touchStart-touchEnd>0?'NEXT':'PREV'

                if(result==='NEXT'){
                  if(!$('.slide-wrap').is(':animated')){
                    nextCount();
                  }                
                }

                if(result==='PREV'){
                  if(!$('.slide-wrap').is(':animated')){
                    prevCount();
                  }
                }

                mouseDown=false;
            },
            mousemove:function(e){
              if(!mouseDown){return;}
              dragEnd=e.clientX;
              $('.slide-wrap').css({left:dragEnd-dragStart});
            }

          });

          // 모바일 : 핑거터치
          $('.slide-container').on({
            touchstart:function(e){   // = mousedown
              timerfn();  
              touchStart=e.originalEvent.changedTouches[0].clientX;           
              dragStart=e.originalEvent.changedTouches[0].clientX-$('.slide-wrap').offset().left-winW;
              mouseDown=true;              
            },
            touchend:function(e){     // = mouseup              
              touchEnd=e.originalEvent.changedTouches[0].clientX;
              result=touchStart-touchEnd>0?'NEXT':'PREV'

                if(result==='NEXT'){
                  if(!$('.slide-wrap').is(':animated')){
                    nextCount();
                  }
                }

                if(result==='PREV'){
                  if(!$('.slide-wrap').is(':animated')){
                    prevCount();
                  }
                }             
                mouseDown=false;
            },
            touchmove:function(e){    // = mousemove
              if(!mouseDown){return;}
              dragEnd=e.originalEvent.changedTouches[0].clientX;
              $('.slide-wrap').css({left:dragEnd-dragStart});
            }
          });

    }
    section2(){
      // 섹션2 P
      const sec2Top=$('#section2').offset().top-$(window).height();
            $(window).scroll(()=>{
              if($(window).scrollTop()>sec2Top){
                $('#section2').addClass('sec2Ani');
                return;
              }
              if($(window).scrollTop()===0){
                $('#section2').removeClass('sec2Ani');
                return;     
              }
            });
    }
    section3(){
      // 섹션3 P
      const sec3Top=$('#section3').offset().top-$(window).height();
            $(window).scroll(()=>{
              if($(window).scrollTop()>sec3Top){
                $('#section3').addClass('sec3Ani');
                return;
              }
              if($(window).scrollTop()===0){
                $('#section3').removeClass('sec3Ani');
                return;
              }
            });
    }
    section4(){      
      let idx = 0;
      let winW = $(window).width();
      let cols = 4;             
      let imgW = winW/cols;           
      let imgH = imgW*0.8125;                     
      let n = $('.gallery-list').length;              
      let h = $('.gallery-list.hide').length;   
      let rows = Math.ceil((n-h)/cols);
      
          $('.img-btn').on({
            click:function(e){
              e.preventDefault();
            }
          })
      
          // 패럴럭스
          let sec4Top=$('#section4').offset().top-$(window).height();
          let scr= false;

          $(window).scroll(()=>{
            if($(window).scrollTop()>=sec4Top){
              if(scr===false){
                scr=true; // 애니메이션 1회 진행 완료
                $('#section4').addClass('sec4Ani');                
              }              
              return;
            }
            // 섹션4 스크롤탑값 이상이면 계속 진행 포에버
            if($(window).scrollTop()===0){
              $('#section4').removeClass('sec4Ani');
              scr=false;
              return;
            }
          });

          // 로딩시 0.1초 후에 한 번 강제 실행
          setTimeout(galleryMain, 100);

          // 반응형 리사이즈
          $(window).resize(function(){
            galleryMain();
          });

          $('.gallery-btn').each(function(index){
            $(this).on({
              click:function(e){
                e.preventDefault();
                idx=index;
                galleryMain();
                $('.gallery-btn').removeClass('on');
                $('#section4').removeClass('sec4Ani');
                $(this).addClass('on');
              }
            });
          });

          // 갤러리 이미지 재배치
          function galleryMain(){
            winW = $(window).width();        
            
            if(winW>=1280){
              cols=4;
            }
            else if(winW>=1024){
              cols=3;
            }
            else if(winW>=600){
              cols=2;
            }
            else {
              cols=1;
            }

            imgW = winW/cols;           
            imgH = imgW*0.8125;

            $('.gallery-list').removeClass('zoomin');                                        // 줌 효과 초기화
            $('.gallery-list').stop().animate({width:imgW,height:imgH}).removeClass('hide'); // 초기화        
            $('.gallery-list .img-wrap').css({width:imgW});

            if(idx===0){        // 8개
              switch(cols){
                case 4:              
                    $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                    $('.gallery-list').eq(1).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                    $('.gallery-list').eq(2).show().stop().animate({left:imgW*2,top:imgH*0}, 300);
                    $('.gallery-list').eq(3).show().stop().animate({left:imgW*3,top:imgH*0}, 300);
                    $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                    $('.gallery-list').eq(5).show().stop().animate({left:imgW*1,top:imgH*1}, 300);
                    $('.gallery-list').eq(6).show().stop().animate({left:imgW*2,top:imgH*1}, 300);
                    $('.gallery-list').eq(7).show().stop().animate({left:imgW*3,top:imgH*1}, 300);
                  break;
                case 3:
                    $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                    $('.gallery-list').eq(1).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                    $('.gallery-list').eq(2).show().stop().animate({left:imgW*2,top:imgH*0}, 300);
                    $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                    $('.gallery-list').eq(4).show().stop().animate({left:imgW*1,top:imgH*1}, 300);
                    $('.gallery-list').eq(5).show().stop().animate({left:imgW*2,top:imgH*1}, 300);
                    $('.gallery-list').eq(6).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                    $('.gallery-list').eq(7).show().stop().animate({left:imgW*1,top:imgH*2}, 300);
                  break;
                case 2:
                    $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                    $('.gallery-list').eq(1).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                    $('.gallery-list').eq(2).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                    $('.gallery-list').eq(3).show().stop().animate({left:imgW*1,top:imgH*1}, 300);
                    $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                    $('.gallery-list').eq(5).show().stop().animate({left:imgW*1,top:imgH*2}, 300);
                    $('.gallery-list').eq(6).show().stop().animate({left:imgW*0,top:imgH*3}, 300);
                    $('.gallery-list').eq(7).show().stop().animate({left:imgW*1,top:imgH*3}, 300);
                  break;
                default:
                  $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                  $('.gallery-list').eq(2).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                  $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*3}, 300);
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*4}, 300);
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*5}, 300);
                  $('.gallery-list').eq(6).show().stop().animate({left:imgW*0,top:imgH*6}, 300);
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*0,top:imgH*7}, 300);
              }
            }
            else if(idx===1){   // 3개 보이고 5개 숨기기 재배치                    
              $('.gallery-list').eq(0).hide().addClass('hide');
              $('.gallery-list').eq(2).hide().addClass('hide');
              $('.gallery-list').eq(3).hide().addClass('hide');
              $('.gallery-list').eq(4).hide().addClass('hide');
              $('.gallery-list').eq(6).hide().addClass('hide');
              switch(cols){
                case 4:              
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*0}), 300;
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*1,top:imgH*0}), 300;          
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*2,top:imgH*0}), 300;
                  break;
                case 3:
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*0}), 300;
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*1,top:imgH*0}), 300;          
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*2,top:imgH*0}), 300;
                  break;
                case 2:
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*0}), 300;
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*1,top:imgH*0}), 300;          
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*0,top:imgH*1}), 300;
                  break;
                case 1:
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*0}), 300;
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*1}), 300;          
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*0,top:imgH*2}), 300;
                  break;
              }
            }
            else if(idx===2){   // 6개                    

              $('.gallery-list').eq(3).hide().addClass('hide');
              $('.gallery-list').eq(7).hide().addClass('hide');
              switch(cols){
                case 4:              
                  $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                  $('.gallery-list').eq(2).show().stop().animate({left:imgW*2,top:imgH*0}, 300);          
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*3,top:imgH*0}, 300);  
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                  $('.gallery-list').eq(6).show().stop().animate({left:imgW*1,top:imgH*1}, 300);
                  break;
                case 3:
                  $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                  $('.gallery-list').eq(2).show().stop().animate({left:imgW*2,top:imgH*0}, 300);          
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*1}, 300);  
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*1,top:imgH*1}, 300);
                  $('.gallery-list').eq(6).show().stop().animate({left:imgW*2,top:imgH*1}, 300);
                  break;
                case 2:
                  $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                  $('.gallery-list').eq(2).show().stop().animate({left:imgW*0,top:imgH*1}, 300);          
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*1,top:imgH*1}, 300);  
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                  $('.gallery-list').eq(6).show().stop().animate({left:imgW*1,top:imgH*2}, 300);
                  break;
                case 1:
                  $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                  $('.gallery-list').eq(2).show().stop().animate({left:imgW*0,top:imgH*2}, 300);          
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*3}, 300);  
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*4}, 300);
                  $('.gallery-list').eq(6).show().stop().animate({left:imgW*0,top:imgH*5}, 300);
                  break;
              }
            }
            else if(idx===3){   // 4개                

              $('.gallery-list').eq(1).hide().addClass('hide');
              $('.gallery-list').eq(3).hide().addClass('hide');
              $('.gallery-list').eq(6).hide().addClass('hide');
              $('.gallery-list').eq(7).hide().addClass('hide');
              switch(cols){
                case 4:              
                  $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);          
                  $('.gallery-list').eq(2).show().stop().animate({left:imgW*1,top:imgH*0}, 300);          
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*2,top:imgH*0}, 300);
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*3,top:imgH*0}, 300);
                  break;
                case 3:
                  $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);          
                  $('.gallery-list').eq(2).show().stop().animate({left:imgW*1,top:imgH*0}, 300);          
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*2,top:imgH*0}, 300);
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                  break;
                case 2:
                  $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);          
                  $('.gallery-list').eq(2).show().stop().animate({left:imgW*1,top:imgH*0}, 300);          
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*1,top:imgH*1}, 300);
                  break;
                case 1:
                  $('.gallery-list').eq(0).show().stop().animate({left:imgW*0,top:imgH*0}, 300);          
                  $('.gallery-list').eq(2).show().stop().animate({left:imgW*0,top:imgH*1}, 300);          
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*3}, 300);
                  break;
              }              
            }
            else if(idx===4){   // 2개                    

              $('.gallery-list').eq(0).hide().addClass('hide');
              $('.gallery-list').eq(1).hide().addClass('hide');
              $('.gallery-list').eq(2).hide().addClass('hide');
              $('.gallery-list').eq(4).hide().addClass('hide');
              $('.gallery-list').eq(5).hide().addClass('hide');
              $('.gallery-list').eq(6).hide().addClass('hide');
              switch(cols){
                case 4:              
                  $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                  break;
                case 3:
                  $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                  break;
                case 2:
                  $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                  break;
                case 1:
                  $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*0}, 300);
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                  break;
              }    
            }
            else if(idx===5){   // 5개                    

              $('.gallery-list').eq(0).hide().addClass('hide');
              $('.gallery-list').eq(2).hide().addClass('hide');
              $('.gallery-list').eq(6).hide().addClass('hide');
              switch(cols){
                case 4:              
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*0}, 300);          
                  $('.gallery-list').eq(3).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*2,top:imgH*0}, 300);
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*3,top:imgH*0}, 300);
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                  break;
                case 3:
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*0}, 300);          
                  $('.gallery-list').eq(3).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*2,top:imgH*0}, 300);
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*1,top:imgH*1}, 300);
                  break;
                case 2:
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*0}, 300);          
                  $('.gallery-list').eq(3).show().stop().animate({left:imgW*1,top:imgH*0}, 300);
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*1,top:imgH*1}, 300);
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                  break;
                case 1:
                  $('.gallery-list').eq(1).show().stop().animate({left:imgW*0,top:imgH*0}, 300);          
                  $('.gallery-list').eq(3).show().stop().animate({left:imgW*0,top:imgH*1}, 300);
                  $('.gallery-list').eq(4).show().stop().animate({left:imgW*0,top:imgH*2}, 300);
                  $('.gallery-list').eq(5).show().stop().animate({left:imgW*0,top:imgH*3}, 300);
                  $('.gallery-list').eq(7).show().stop().animate({left:imgW*0,top:imgH*4}, 300);
                  break;
              }
            }

            // hide 결과가 몇 개니?
            h=$('.gallery-list.hide').length;
            rows = Math.ceil((n-h)/cols); // 줄 수는 hide 갯수를 가져온 뒤에 높이를 정한다
            $('.gallery-wrap').stop().animate({height:imgH*rows}, 300);

            // zoom 효과
            $('.gallery-list').addClass('zoomin');

      }

    }
    section5(){
      
      // 패럴럭스
      let sec5Top=$('#section5').offset().top-$(window).height();
      let t=false;

      $(window).scroll(()=>{
        if($(window).scrollTop()===0){
          t=false;
          $('#section5').removeClass('sec5Ani');
        }
        if($(window).scrollTop()>=sec5Top){
          if(t===false){
            t=true;
            $('#section5').addClass('sec5Ani');
            // svg 애니메이션 함수 호출
            svgAnimation();
          }                    
      }
      });

      function svgAnimation(){
        const svgObj  = $('.ring-front circle');
        let   svgArr  = [];
        let   perSize = [];
        let   piece   = [];
        let   per     = [.9, .75, .9, .62];
        let   second  = 3;                  
        let   sum     = [0,0,0,0];
        let   setId   = [0,0,0,0];

              $.each(svgObj, function(idx, obj){
                svgArr[idx] = obj.getTotalLength();

                // 2. 전체 길이 대입
                $(obj).css({strokeDasharray:svgArr[idx]});     
                $(obj).css({strokeDashoffset:svgArr[idx]});       

                // 3. 퍼센트의 길이
                perSize[idx] = svgArr[idx] * per[idx];

                // 4. 마디의 길이
                piece[idx] = (perSize[idx]/second)/100;

                // 5 . 마디 카운트
                // 6. 애니메이션 구현
                function sumfn(){
                  sum[idx] += piece[idx];
                  if(sum[idx]>perSize[idx]){
                    clearInterval(setId[idx])
                  }
                  else{
                    $(obj).css({strokeDashoffset:svgArr[idx]-sum[idx]});
                    $('.count-num').eq(idx).html(Math.ceil(sum[idx]/svgArr[idx]*100)+'%');
                  }            
                }
                
                // 7. 타이머 설정
                setId[idx]=setInterval(sumfn, 10);
              });

      }            

    }
    section6(){
      let winH=$(window).height();
      const sec6Top=$('#section6').offset().top-winH;
      let t=false;

            $(window).scroll(function(){
              if($(window).scrollTop()===0){
                $('#section6').removeClass('sec6Ani');
                t=false;
              }
              if($(window).scrollTop()>sec6Top){
                if(t===false){
                  $('#section6').addClass('sec6Ani');
                  t=true;
                }               
              }
            });
    }
    section7(){
      let winH=$(window).height();
      const sec7Top=$('#section7').offset().top-winH;

            $(window).scroll(function(){
              if($(window).scrollTop()===0){
                $('#section7').removeClass('sec7Ani');
              }
              if($(window).scrollTop()>sec7Top){                
                $('#section7').addClass('sec7Ani');
              }
            });
    }
    section8(){
      let winH=$(window).height()
      const sec8Top=$('#section8').offset().top-winH

            $(window).scroll(function(){
              if($(window).scrollTop()===0){
                $('#section8').removeClass('sec8Ani');
              }
              if($(window).scrollTop()>sec8Top){                
                $('#section8').addClass('sec8Ani');
              }
            });

    }
    section9(){
      let winH=$(window).height()
      const sec9Top=$('#section9').offset().top-winH

            $(window).scroll(function(){
              if($(window).scrollTop()===0){
                $('#section9').removeClass('sec9Ani');
              }
              if($(window).scrollTop()>sec9Top){                
                $('#section9').addClass('sec9Ani');
              }
            });
    }
    goTop(){

      $(window).scroll(function(){
        if($(window).scrollTop()>100){
          $('#goTopBox').fadeIn(500);
        }
        else{
          $('#goTopBox').fadeOut(500);
        }
      });

      $('#goTopBox').on({
        click:function(){
          $('html, bodoy').stop().animate({scrollTop:0}, 500);
        }
      });
    }
    quick(){

      let quickTop=($(window).height()-$('#quickBox').height())/2-100;

          $(window).scroll(function(){
            $('#quickBox').stop().animate({top:quickTop+$(window).scrollTop()}, 500, 'easeOutExpo');
          });

    }
  }
  const newPofo=new Pofo();

  newPofo.init();

})(jQuery);