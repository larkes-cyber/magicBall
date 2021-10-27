jQuery(document).ready(function($){
  $('a').hide();
  $('#sumb').hide();
  $('.navi').hide();
  $('.lolka').hide();
  $('table').hide();
  let brain_Top='-310%';
  let brain_Left='-312%';
  let heigh='7em';
  let top='-18.5%';
  let left="64%";
  let height_lolka='26em';
  let top_lolka='-24%';
  let left_lolka='54%';
  let size_brain='29px';
  let bollUp='-31.5%';
  let bollDown='-28.5%';
  let bollMid='-30%';
$('.topQuest').hide();

     if(($(window).width()>=1402)&&($(window).width()<1604)){
      VANTA.HALO({
          el: "body",
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 100.00,
          minWidth: 200.00,
          // xOffset:0.18,
          // yOffset:-0.00,
        xOffset:0.18,
        yOffset:-0.05,
          size:1.1
  
        });
     }
     var perem_arr=[];
       $.ajax({
      url:'get.php',
      type: 'POST',
      success: function(data) {
      console.log(data);
      function number(array){
          
            var pattern = /^[а-яА-я]+$/;
            var patternEn = /^[a-zA-z]+$/;
            let output='';
            let count=0;
            let check={
                '0':3,
                '1':3,
                '2':3,
                '3':3,
                '4':3,
                '5':3,
                '6':3,
                '7':3,
                '8':3,
                '9':3    
            };
          if(array=='dgfgdg'){
              consloe.log(2313)
          }
            for(let i=0;i<array.length;i++){
              if(array[i] in check){
                  output+=array[i]
                  count+=1;
              }
              else{
                  break
              }
            }
          
             
            return [+output,count];
        
      }
        let newArrQuestions = data.split(';');
        let arrSum=[];
      
        for (let index = 1; index < newArrQuestions.length; index++) {
            
          arrSum.push(number(newArrQuestions[index])[0])
          newArrQuestions[index]=newArrQuestions[index].substring(number(newArrQuestions[index])[1],newArrQuestions[index].length);
          
        }

         newArrQuestions.pop();
    
        let count=0;
        let position=0;
        let arrProv=[];
        let topArr={};
        for(let i=0;i<3;i++){
          for(let j=0;j<arrSum.length;j++){
            if(arrSum[j]>count){
              count=(arrSum[j]);
              position=j;
            }
          }
          topArr[newArrQuestions[position]]=count;
          //arrProv.push(count);
          arrSum.splice(position,1);
          newArrQuestions.splice(position,1);
          count=0;
          position=0;
        }
       for(inde in topArr) {
           if(inde==''){
               delete topArr[inde];
           }
       }
       let boolOne=true;
       let boolTwo=true;
       let boolThree=true;
       console.log(topArr);
       for (n in topArr){
           if (n != undefined && topArr[n]>30 && boolOne){
               $('#topOne').text('1.'+' '+n);
               boolOne=false;
           }
              if (n != undefined && topArr[n]>30 && boolTwo){
                $('#topTwo').text('2.'+' '+n);
               boolTwo=false;
           }
                  if (n != undefined && topArr[n]>30 && boolThree){
                 $('#topThree').text('3.'+' '+n);
               boolThree=false;
           }
       }
     
      }  
   })
   $('.top').css({
       'cursor':'pointer'
   })
  let trol=0;  
  $('.click').click(function(){
        if(trol==0){
$('.topQuest').show('blind',{direction:'up'},2000);
    trol=1;
        }
            setTimeout(function(){
           if(+trol==1){
               $('.topQuest').hide('explode',{pieces:4},1500);
          trol=0;
}
    },5000) 
});

     if(($(window).width()>=998)&&($(window).width()<1320)){

      brain_Top='-300%';
      brain_Left='-333%';
      heigh='4em';
      top='-18.5%';
      left="65.5%";
      height_lolka='22em';
      top_lolka='-24%';
      left_lolka='0%';
      size_brain='25px';
      $('.brain').css({
        lineHeight:'30px'
      });
      $('.brain').css({
       paddingTop:'-15%'
      })
    }
     if(($(window).width()>1604)&&($(window).width()<=1900)){ 

        brain_Top='-312%';
       brain_Left='-323%';
       heigh='4em';
       top='-18.5%';
       left="65.5%";
       height_lolka='25em';
       top_lolka='-24%';
       left_lolka='54%';
       size_brain='28px';
       $('.brain').css({
         lineHeight:'43px'
       })
     }
     if(($(window).width()>1440)&&($(window).width()<1604)){
    brain_Top='-336%';
    brain_Left='-333%';
    heigh='4em';
    top='-18.5%';
    left="65.5%";
    height_lolka='22em';
    top_lolka='-24%';
    left_lolka='54%';
    size_brain='25px';
    $('input').css({
      width:'90%'
    })
    }
   //alert($(window).width())
    if(($(window).width()>1204)&&($(window).width()<=1440)){

     brain_Top='-335%';
      brain_Left='-341%';
      heigh='4em';
      top='-18.5%';
      left="65.5%";
      height_lolka='20.3em';
      top_lolka='-24%';
      left_lolka='53.5%';
      size_brain='24px'
      $('.brain').css({
        'lineHeight':'155%'
    })
    }
//alert($(window).width())
     if(($(window).width()>2000)&&($(window).width()<2200)){
     
     // brain_Left='-3000%';
      size_brain='32px';
       height_lolka='29em';
       left_lolka='54%';
       brain_Left='-303%';
     }
     if(($(window).width()>2700)&&($(window).width()<3000)){
   
    brain_Top='-295%';
     brain_Left='-278%';
     heigh='8em';
     top='-18.5%';
     left="65%";
     height_lolka='36em';
     top_lolka='-23%';
     left_lolka='55%';
     size_brain='41px';
     bollUp='-31.5%';
     bollDown='-28.5%';
     bollMid='-30%';
     $('.brain').css({
       lineHeight:'70px'
     })
    VANTA.HALO({
      el: "body",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 100.00,
      minWidth: 200.00,
    xOffset:0.18,
    yOffset:-0.06,
      size:1.1
    });
    $('.title').css({
      'font-size':'790%',
      'line-height':'150px'
    });   
    $('.answer').css({
      'font-size':'35px',
      'margin-top':'2%'
    });
    $('.text_nav').css({
      'font-size':'40px'
    });
    $('.form').css({
           height:'150px',
           // width:'50%'
         })
     }
    if(($(window).width()>=3000)&&($(window).width()<3224)){
       $('.title').css({
        'font-size':'850%',
        'line-height':'150px'
      });
      $('.form').css({
        height:'160px'
      });
      $('.text_nav').css({
        'font-size':'50px'
      });
      $('.answer').css({
        fontSize:'40px'
      });
    }
    if($(window).width()>=3224){

      size_brain='px';
      $('.brain').css({
        lineHeight:'110px'
      })
      left="66%";
      top='-18%';
      brain_Top='-282%';
      brain_Left='-275%';
      height_lolka='57em';
      left_lolka='54.5%'
      $('.title').css({
        'font-size':'1250%',
        'line-height':'250px'
      });
      $('.form').css({
        height:'220px',
        marginTop:'17%'
      });
      $('.text_nav').css({
        'font-size':'65px'
      });
      $('.answer').css({
        fontSize:'50px'
      });
        $('.lolka').css({
         
        });
    }
    if(($(window).width()>=4624)){
      left="66%";
      top='-18%';
      brain_Top='-276%';
      brain_Left='-270%';
      height_lolka='74em';
      left_lolka='54.5%';
      size_brain='78px';
      $('.brain').css({
        lineHeight:'130px'
      });
      $('.title').css({
        'font-size':'1650%',
        'line-height':'330px'
      });
      $('.form').css({
        height:'270px'
      });
      $('.text_nav').css({
        'font-size':'85px'
      });
      $('.answer').css({
        fontSize:'70px'
      });
    }
    if(($(window).width()>=998)&&($(window).width()<1320)){

            size_brain='24px';
  
            brain_Top='-335%';
            brain_Left='-370%';
            top_lolka='-24%';
            left_lolka='52%';
            VANTA.HALO({
                el: "body",
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: 100.00,
                minWidth: 200.00,
              xOffset:0.18,
              yOffset:-0.06,
                size:1.1
              });
              
              $('.title').css({
                'font-size':'390%',
                'line-height':'80px'
              });
             
              $('.answer').css({
                'font-size':'15px',
                'margin-top':'2%'
              });
              $('.text_nav').css({
                'font-size':'20px'
              });
              $('.form').css({
                     height:'85px',
                   })
           }        
        if($(window).width()<500){    
          bollDown='-315%';
          bollMid='-320%';
          bollUp='-325%';
           brain_Top='-295%';
           brain_Left='58%';
           heigh='34em';
           top='-115%';
           left="10%";
           height_lolka='0em';
          
           $('#sumb').css({
             'z-index':0
           })
           $('.lolka').css({
            opacity:'0.8'
           })
          size_brain='23px'
            $('.container-lg').css({
                width:'50%',
                height:'95%'
            });
            $('.title').css({
                'font-size':'47px',
                width:'330px',
                marginTop:'35%',
                lineHeight:'73px'
            });
            $('input').css({
                marginTop:'300%',
                width:'190%',
                 height:'95px',
                 marginLeft:'3%'
            });
            $('.answer').css({
            fontSize:'10px',
            marginLeft:'25%'
            })
            $('img').css({
                marginTop:'-320%',
                width:'235%',
                marginLeft:'-46%'
            });
            $('.lolka').css({
          marginTop:'-267%',
              width:'170%',
              marginLeft:'5%'
        
            })
            $('.fix').css({
              width:'80%',
              'z-index':'750',
              lineHeight:'29px'
            })
            left_lolka='67%';
            height_lolka='0em';
            VANTA.HALO({
                el: "body",
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: 100.00,
                minWidth: 200.00,
                xOffset:-0.05,
                yOffset:0.02,
                    size:0.9
            
            });
            $('nav').hide()
            $('.navis').css({
              fontSize:'0px'
            })
            };
            let Why='создатель';
            if(($(window).width()>1000)&&($(window).width()<1200)){
   
              $('.title').css({
                'font-size':'360%',
                'line-height':'70px'
              });        
              $('.answer').css({
                'font-size':'15px',
                'margin-top':'2%'
              });
              $('.text_nav').css({
                'font-size':'20px'
              });
              $('.form').css({
                     height:'75px',
                      width:'85%'
                   })
              $('.brain').css({
                lineHeight:'25px'
              })
              brain_Top='-365%';
              brain_Left='-360%';
              height_lolka='15.6em';
              size_brain='18px';

              $('img').css({
                'margin-left':'49%',
                'margin-top':'-30%', 
                height: '230%'
              })
              left_lolka='54.3%';
            }
           
            if(($(window).width()>1200)&&($(window).width()<1300)){
   
              brain_Top='-345%';
              brain_Left='-360%';
              height_lolka='18.3em';
              size_brain='20px'
            }
            if(($(window).width()>1204)&&($(window).width()<=1440)){
       
              $('.title').css({
                fontSize:'72px'
              })
              $('input').css({
                 marginTop:'15%',
                width:'90%',
                height:'95px'

            });
            $('.answer').css({
              fontSize:'20px'
            })
            $('.navi').css({
              fontSize:'25px'
            })
            }
          if(($(window).width()<998)&&($(window).width()>500)){
            $('.lolka').css({
              'z-index':'0',
              opacity:'0.7'             
            })
            bollDown='-217%';
            bollMid='-220%';
            bollUp='-223%';
             brain_Top='-180%';
             brain_Left='74%';
             heigh='34em';
             top='-115%';
             left="10%";
            size_brain='28px'
          $('.fix').css({
            width:'70%'
          })
                $('.text_nav').css({
                    fontSize:'28px'               
                });
                $('.brain').css({
                    'lineHeight':'155%'
                })
                $('nav').css({
                    width:'65%',
                    marginTop:'5%',
                    paddingLeft:"13%"
                })
                $('.container-lg').css({
                    width:'50%',
                    height:'95%'
                });
                $('.title').css({
                    fontSize:'95px',
                    width:'200%',
                    marginTop:'60%',
                    marginLeft:'10%',
                    lineHeight:'115px'
                })
                $('input').css({
                    marginTop:'190%',
                    width:'130%',
                    height:'130px'

                });
                $('img').css({
                    marginTop:'-220%',
                    width:'160%',
                    marginLeft:'13%'
                });
                $('.form').css({                    
                });
                $('.answer').css({
                    marginLeft:'17%',
                    marginTop:'4%'
                });
                VANTA.HALO({
                    el: "body",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: true,
                    minHeight: 100.00,
                    minWidth: 200.00,
                    xOffset:-0.0,
                    yOffset:-0.05,
                        size:0.9
                });
                $('.lolka').css({
                  height:'14em',
                  marginTop:'-185%',
                  marginLeft:'33%',
                  fontSize:'32px'
                 })
            };
           
              
            let params_brain=(brain_Top,brain_Left,size_brain)=>{
              $('.brain').css({
              'margin-top':brain_Top,
              'margin-left':brain_Left,
              fontSize:size_brain
            });
          }
          params_brain(brain_Top,brain_Left,size_brain);
            let ball_animate_u=(lol)=>{
              if(lol==1){
              $('#sumb').animate(
                {
                  marginTop:'-33%'
                },
                250
                )
              }
              else{
                return
              }
            }
            let ball_animate_dow=(lol)=>{
              if(lol==1){
              $('#sumb').animate(
                {
                  marginTop:'-27%'
                },
               250
                )
              }
              else{
                return
              }
            } 
            let ball_animate_s=(lol)=>{
              if(lol==1){
              $('#sumb').animate(
                {
                  marginTop:'-30%'
                },
               250
                )
              }
              else{
                return
              }
            }
            let params=(heigh,top,left)=>{ $('.lolka').css({
              height:heigh,
              marginTop:top,
              opacity:'0.8',
              marginLeft:left
               })}
               let wart='Кирилл Васильев';       
  let lolka_animate=(height_lolka,top_lolka,left_lolka,brain_Top,brain_Left,count,answer)=>{
            let len_key_items=key_items.length;     
            $('.lolka').show();
            $('.lolka').animate({
            height:height_lolka,
            marginLeft:left_lolka,
            marginTop:top_lolka  
            },
            1500
            )
          if($(window).width()<998){$('.lolka')}
            setTimeout((brain_Top,brain_Left) => {
            $('.brain').css({
            marginLeft:brain_Left,
            marginTop:brain_Top   
            })
            $('.brain').text(answer);
            $('.brain').fadeOut(300);
            $('.brain').fadeIn(1000);
            }, 1500);
            };           
            let boool=true;
            let index=0;
           var constt=1;
            $('input').focus(function(){
              $('#sumb').mouseover(function(){
                if($(window).width()>998)
                {
                  setTimeout(function(){ball_animate_u(constt)},200);
                  setTimeout(function(){ball_animate_dow(constt)},200);
                  setTimeout(function(){ball_animate_s(constt)},200);
                  $('#sumb').clearQueue();
                  $('#sumb').stop();
                }
                else{
                  return
                }
              })
            
            }
            )
          array_out=['Завтра не твой день','Тебе повезёт!',"нет","не могу сказать точно",'попробуй ещё раз',"Насколько я вижу да","Спроси позже","Лучше сейчаc не говорить тебе","Не могу сейчас сказать","Соберись с мыслями и спроси снова","Не рассчитывай на это","Я так не думаю","Я сомневаюсь насчёт этого","Это бесспорно","Да это так","Может быть","Наиболее вероятно","Мои источники говорят нет","Мои источники говорят да","НЕТ!","Перспектива хорошая","Перспектива не очень хорошая","Будущее туманно спроси позже","Знаки указывают что да","Знаки указывают что нет","Извини, нет","Очень сомневаюсь","Без сомнения","ДА!","Определённо да","Ты можешь надеяться на это"];

          $('.brain').hide();
          let countt=0;
          $('.navi').fadeIn(1500)
          let ball_animate_up=()=>{
          $('#sumb').animate(
          {
            marginTop:bollUp
          },
          120
          )
          }
          let ball_animate_down=()=>{
          $('#sumb').animate(
          {
          marginTop:bollDown
          },
          120
          ) 
          } 
          let ball_animate_sr=()=>{
          $('#sumb').animate(
          {
            marginTop:bollMid
          },
          200
          )
          }
         let count=0;
          $('#sumb').fadeIn(2000)
          let two_anw=(Str)=>{
            let count=(Str.split(' ')[0])+(Str.split(' ')[1])
          return count;
          }
          let key=0;
          let key_items=0;
          let check=(Word,question)=>{
            let priority=0;
            let arr_count=[];
            let answer_plus_priority=[];
            switch(Word){
              case 'ли':
                answer_plus_priority=[];
                priority=11;
                arr_count=['ДА!','НЕТ!','Не знаю точно',"Наиболее вероятно","Насколько я вижу да","Мои источники говорят да","Лучше сейчаc не говорить тебе","Не могу сейчас сказать","Соберись с мыслями и спроси снова"]
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
                case 'мой':
                  answer_plus_priority=[];
                priority=10;
                arr_count=['ДА!','НЕТ!','Не знаю точно',"Наиболее вероятно","Насколько я вижу да","Мои источники говорят да","Лучше сейчаc не говорить тебе","Не могу сейчас сказать","Соберись с мыслями и спроси снова"]
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
                case 'точно':
                  answer_plus_priority=[];
                  priority=10;
                  arr_count=['ДА!','НЕТ!','Не знаю точно',"Наиболее вероятно","Насколько я вижу да","Мои источники говорят да","Лучше сейчаc не говорить тебе","Не могу сейчас сказать","Соберись с мыслями и спроси снова"]
                  answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                  answer_plus_priority.push(priority)
                  return answer_plus_priority;
                case 'я':
                  answer_plus_priority=[];
                  priority=5;
                  arr_count=['ДА!','НЕТ!','Не знаю точно',"Наиболее вероятно","Насколько я вижу да","Мои источники говорят да","Лучше сейчаc не говорить тебе","Не могу сейчас сказать","Соберись с мыслями и спроси снова"]
                  answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                  answer_plus_priority.push(priority)
                  return answer_plus_priority;
                case 'моя':
                  answer_plus_priority=[];
                priority=10;
                arr_count=['ДА!','НЕТ!','Не знаю точно',"Наиболее вероятно","Насколько я вижу да","Мои источники говорят да","Лучше сейчаc не говорить тебе","Не могу сейчас сказать","Соберись с мыслями и спроси снова"]
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
                case 'меня':
                  answer_plus_priority=[];
                priority=10;
                arr_count=['ДА!','НЕТ!','Не знаю точно',"Наиболее вероятно","Насколько я вижу да","Мои источники говорят да","Лучше сейчаc не говорить тебе","Не могу сейчас сказать","Соберись с мыслями и спроси снова"]
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
                case "будет":
                  answer_plus_priority=[];
                 arr_count=['Люди выйдут на контакт с пришельцами','Люди побывают на Марсе!','Исскуственный интеллект восстанет против человека!','Появится телепорт!',"Люди смогут перемещаться во времени",'Машины смогут летать!','Телефон будет мощнее компьютера','Будущее туманно спроси позже'] 
                 if(question.indexOf('что')!=-1){
                  priority=6;
                 }
                 else{
                  priority=0;
                 }
                 answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                 answer_plus_priority.push(priority)
                 return answer_plus_priority;
              case 'погода':
                answer_plus_priority=[];
                priority=10;
                arr_count=['Хорошая!','Солнечная','Туманная','Ясная','Дождливая','Облачная','Будущее туманно спроси позже'];
              
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
              case 'красивая':
                answer_plus_priority=[];
                arr_count=['Да','Нет','Лучше тебе не знать','Возможно'];
                priority=5;
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
              case 'удача':
                answer_plus_priority=[];
                arr_count=['Да','Нет','Возможно'];
                priority=5;
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
              case 'чем':
                answer_plus_priority=[];
                arr_count=['Кашей','РуЧКОЙ','ПолезНыМ','ОстрЫм','Сладким','Чем-то рыбным...','Молоком','Книгой','Будущее туманно спроси позже','ГорьКим','СолёНым'];
                priority=6;
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
              case 'или':
                answer_plus_priority=[];
                priority=6;
                arr_count=['Знаки указывают, что лучше второе!','Знаки указывают, что лучше первое!','Будущее туманно спроси позже'];
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
              case 'поесть':
                answer_plus_priority=[];
                arr_count=['Что-то горькое...','Печеньку','Тортик','Суп','Фрукт','Салат','Что-то сладкое','Что-то солёное'];
                priority=7;
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
              case 'заняться':
                answer_plus_priority=[];
                arr_count=['Спортом','Чтением книг','Учёбой','Погулять с друзьями!','Поиграть','Поесть','Поспать','Поговорить с лучшим другом','Пробежкой'];
                priority=7;
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
              case 'купить':
                answer_plus_priority=[];
                priority=6;
                arr_count=['Что-то дешёвое!','Чем дороже, тем лучше!','Будущее туманно спроси позже','Не стоит тратить деньги...'];
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
          
              case 'лучше':
                answer_plus_priority=[];
                priority=5;
                arr_count=['Знаки указывают, что лучше второе!','Знаки указывают, что лучше первое!','Будущее туманно спроси позже'];
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
              case 'повезёт':
                answer_plus_priority=[];
                priority=5;
                arr_count=['Да','Нет','Возможно'];
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
              case 'завтра':
                answer_plus_priority=[];
                priority=7;
                arr_count=['Завтра плохой день!','Завтра будет классный день','Лучше тебе не знать'];
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                answer_plus_priority.push(priority)
                return answer_plus_priority;
                case 'где':
                  priority=4;
                  arr_count=["Не могу сказать точно","Будущее туманно спроси позже",'Где-то рядом','Очень далеко','Точно не в твоём городе','Не в твоей стране','Проверь свой холодильник )','Обернись!']
                answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                 answer_plus_priority.push(priority)
                 return answer_plus_priority;
                 case 'когда':
                   priority=7;
                   let fiy=Math.floor(Math.random() * (1000 - 0)) + 0;
                   fiy='Через'+' '+fiy+' '+'дней'
                   arr_count=['Скоро...','Явно не скоро...',"Будущее туманно спроси позже",fiy]
                   answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                   answer_plus_priority.push(priority)
                   return answer_plus_priority;
                  case Why:
                    priority=6;
                    arr_count=[wart,'Скоро...','Явно не скоро...','К этому времени уже не будет человечества',"Будущее туманно спроси позже","Не могу сказать точно"]
                    answer_plus_priority.push(arr_count[0])
                    answer_plus_priority.push(priority)
                    return answer_plus_priority;

                   case 'что':
                     priority=4;
                     arr_count=['Всё, что угодно!','Что-то хорошее','Что-то плохое',"Не могу сказать точно","Будущее туманно спроси позже"]
                     answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                     answer_plus_priority.push(priority)
                   
                     return answer_plus_priority;
                    case 'существуют':
                    priority=12;
                     arr_count=['Всё, возможно!','Наиболее вероятно','Точно да!',"Не могу сказать точно","Будущее туманно спроси позже",'Точно нет!']
                     answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                     answer_plus_priority.push(priority)
                     return answer_plus_priority;
                     case 'существует':
                      priority=12;
                       arr_count=['Всё, возможно!','Наиболее вероятно','Точно да!',"Не могу сказать точно","Будущее туманно спроси позже",'Точно нет!']
                       answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                       answer_plus_priority.push(priority)
                       return answer_plus_priority;
                    case 'стану':
                      priority=6;
                       arr_count=['Успешным','Классым спортсменом','Богатым','Будущее туманно спроси позже','Классным специалистом!']
                       answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                       answer_plus_priority.push(priority)
                       case 'буду':
                         arr_count=['Успешным','Классым спортсменом','Богатым','Будущее туманно спроси позже','Классным специалистом!']
                         if(question.indexOf('я')!=-1 && question.indexOf('кем')!=-1){
                          priority=6;
                         }
                         else{
                          priority=0;
                         }
                         answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                         answer_plus_priority.push(priority)
                  case 'будущем':
                    priority=5;
                    arr_count=['Классная работа!','Много денег','Крутая машина!','Много друзей','Свой бизнес','Классный дом!',"Будущее туманно спроси позже"]
                    answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                    answer_plus_priority.push(priority)
                    case 'кем':
                      priority=4;
                       arr_count=['Хорошим','Плохим','Забавным','Весёлым','Занудным']
                       answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                       answer_plus_priority.push(priority)
                     case 'почему':
                       priority=4;
                       arr_count=['На то есть хорошая причина...','Разгадка кроется в самом очевидном!','Cложно сказать...','Подумай ещё лучше, ты близок к разгадке!',"Не могу сказать точно",'Тебе лучше не знать!','Проблема в тебе!']
                       answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                       answer_plus_priority.push(priority)
                     
                       return answer_plus_priority;
                    case 'кто':
                      priority=4;
                      arr_count=['Кто-то хороший!','Кто-то плохой!','Не могу дать точного ответа',"Будущее туманно спроси позже"]
                      answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                      answer_plus_priority.push(priority);
                      return answer_plus_priority;
                  case 'чей':
                    priority=4;
                    arr_count=['Очень плохого человека','Хорошего человека','Умного человека','Не могу дать точного ответа',"Будущее туманно спроси позже"]
                    answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                    answer_plus_priority.push(priority);
                    return answer_plus_priority;
                  case 'какой':
                    priority=4;
                    arr_count=['Красивый','Креативный','Весёлый','Плохой','Грустный','Умный','Не могу дать точного ответа',"Будущее туманно спроси позже"]
                    answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                    answer_plus_priority.push(priority);
                    return answer_plus_priority;
                  case 'сколько':
                    priority=7;
                    let day=Math.floor(Math.random() * (100 - 0)) + 0
                    day=day+' '+'дней'
                    let mouns=Math.floor(Math.random() * (100 - 0)) + 0
                    mouns=mouns+' '+'месяцев';
                    let year=Math.floor(Math.random() * (100 - 0)) + 0;
                    year=year+' '+'лет';

                    arr_count=[day,mouns,year];
                    answer_plus_priority.push(arr_count[Math.floor(Math.random() * (arr_count.length - 0)) + 0])
                    answer_plus_priority.push(priority);
                    return answer_plus_priority;
                  
                    default:
                   
                  return [0,0];
                }
          }
          function max_arr(array){
            let count=array[0];
            for (let index = 1; index < array.length; index++) {
              if(array[index]>count){
                count=array[index];
              }    
            }
            return count;
          }
          function key_answ(answers){
            let count_arr=[];
            for(let key in answers){
              count_arr.push(+key);  
            }
   
            return max_arr(count_arr);
          }
          let teg_check=(question)=>{
            question=question.toLowerCase();
            question=question.split(' ');
            let array_out=['Завтра не твой день','Тебе повезёт!',"нет","не могу сказать точно",'попробуй ещё раз',"Насколько я вижу да","Спроси позже","Лучше сейчаc не говорить тебе","Не могу сейчас сказать","Соберись с мыслями и спроси снова","Не рассчитывай на это","Я так не думаю","Я сомневаюсь насчёт этого","Это бесспорно","Да это так","Может быть","Наиболее вероятно","Мои источники говорят нет","Мои источники говорят да","НЕТ!","Перспектива хорошая","Перспектива не очень хорошая","Будущее туманно спроси позже","Знаки указывают что да","Знаки указывают что нет","Извини, нет","Очень сомневаюсь","Без сомнения","ДА!","Определённо да","Ты можешь надеяться на это"];
            let answer=0;
            let priority=0;
            let answers={
            }
            for(var i=0;i<question.length;i++){    
            if(i==question.length-1){
        if(question[i].slice(-1)=='?'){
          answer=check(question[i].slice(0,-1),question)[0];
          priority=check(question[i].slice(0,-1),question)[1]
          answers[priority]=answer;
        }
        else{
               answer=check(question[i],question)[0];
              priority=check(question[i],question)[1]
              answers[priority]=answer;
        }
            }else{
              answer=check(question[i],question)[0];
              priority=check(question[i],question)[1]
              answers[priority]=answer;
      }
              }
          
            let answ=key_answ(answers);  
            if (answ==0){
               return  array_out[Math.floor(Math.random() * (array_out.length - 0)) + 0]
            }
            else{
            return answers[answ];
            }
          }
          let flag=0;
         let flag_off=0;
        let flag_alert=0;
        let processed=[]
               $('#sumb').click(function(){
                       
           //  alert(flag);
           if($('img').is(':animated')){
             return;
           }
      
              let item=$('input').val();
              if (item in processed){
              }
              else{
                  processed.push(item)
                   let checkNum={
                '0':3,
                '1':3,
                '2':3,
                '3':3,
                '4':3,
                '5':3,
                '6':3,
                '7':3,
                '8':3,
                '9':3  
            }
            if(item[0] in checkNum){
                item='sss';
            }
              answer=teg_check(item);
              $.ajax({ 
             url:'questions.php', 
             type: 'POST',
             data:({question: answer,
                 answerr:answer
             }), 
             success: function(data) {
             
             }
           })
              }            
              answer=teg_check(item);
             
                constt=0;
    
                $('form')[0].reset();
              if(flag==0){
                flag=1;
              for (let index = 0; index < 6; index++) {
                setTimeout(ball_animate_up(),500)
                setTimeout(ball_animate_down(),500)
              }
              ball_animate_sr();
              if(countt==5){
                countt=0;
              }
              
              if($(window).width()>998){
                setTimeout(function(){lolka_animate(height_lolka,top_lolka,left_lolka,brain_Top,brain_Left,countt,answer)},1900)
                params(heigh,top,left) 
              }
           
              if($(window).width()<998){
              setTimeout(function(){ $('.lolka').fadeIn(1500);},1900)
              setTimeout((brain_Top,brain_Left) => {
                $('.brain').css({
                marginLeft:brain_Left,
                marginTop:brain_Top
                
                })
               $('.brain').text(answer)
                $('.brain').fadeOut(300);
                $('.brain').fadeIn(1000);
                }, 3400);
              }
            countt++;
              }
    flag_off=1;
            });
          $( "#target" ).submit(function( event ) {
            let item=$('input').val();
             if (processed.indexOf(item)!=-1){
              }
              else{
                  processed.push(item)
                   let checkNum={
                '0':3,
                '1':3,
                '2':3,
                '3':3,
                '4':3,
                '5':3,
                '6':3,
                '7':3,
                '8':3,
                '9':3
            }
            if(item[0] in checkNum){
                item='sss';
            }
               answer=teg_check(item);
              $.ajax({ 
             url:'questions.php', 
             type: 'POST', 
             data:({question: item,
                     answerr:answer
             }), 
             success: function(data) {
             
             }
           })
              }
           answer=teg_check(item);
         
           constt=0;
      
                $('form')[0].reset();
              if(flag==0){
                flag=1;
              for (let index = 0; index < 6; index++) {
                setTimeout(ball_animate_up(),500)
                setTimeout(ball_animate_down(),500)
              }
              ball_animate_sr();
              if(countt==5){
                countt=0;
              }
             
              if($(window).width()>998){
                setTimeout(function(){lolka_animate(height_lolka,top_lolka,left_lolka,brain_Top,brain_Left,countt,answer)},1900)
                params(heigh,top,left) 
           
              }
                
             
              if($(window).width()<=998){
              setTimeout(function(){ $('.lolka').fadeIn(1500);},1900)
              setTimeout((brain_Top,brain_Left) => {
                $('.brain').css({
                marginLeft:brain_Left,
                marginTop:brain_Top
                    
                })

                $('.brain').text(answer)
                $('.brain').fadeOut(300);
                $('.brain').fadeIn(1000);
                }, 3400);             
              }
          
            countt++;
              }        
    flag_off=1;
          event.preventDefault();
          })  
              
      setTimeout(()=>{
        document.onkeydown = function(e) {
          if(e){
              if(e.Enter){
                 e.enter.preventDefault(); 
              }
              if($('img').is(':animated')){   
                return;
              }
              if(flag_off==1){    
                
             $( "#sumb" ).off( "mouseover");
             constt=1;
             if($(window).width()>998){
             $('.lolka').fadeOut(2000,function(){
             $('.lolka').css({
             height:'26em',
             marginTop: '-23.5%',
             opacity:'0.8',
             marginLeft: '60%'
             });
             });
             $('.brain').fadeOut(300);
           }
           if($(window).width()<998){
             $('.lolka').fadeOut(2000)
             $('.brain').fadeOut(300);
           }
           flag=0;
           flag_off=0;
         }
          }
        }
      },5000)
      setTimeout(function(){
          $('.container-lg').click(function(){
         if($('img').is(':animated')){
          return;
        }
            if(flag_off==1){    
          $( "#sumb" ).off( "mouseover");
          constt=1;
          if($(window).width()>998){
          $('.lolka').fadeOut(2000,function(){
          $('.lolka').css({
          height:'26em',
          marginTop: '-23.5%',
          opacity:'0.8',
          marginLeft: '60%'
          });
          });
          $('.brain').fadeOut(300);
        }
        if($(window).width()<998){
          $('.lolka').fadeOut(2000)
          $('.brain').fadeOut(300);
        }
        flag=0;
        flag_off=0;
      }
    
          });
        },5000);

          if($(window).width()<759){
            $('.top').hide();
          }
        });
