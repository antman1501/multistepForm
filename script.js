      let firstAction=document.querySelector('.action-page-1');
      let secondAction=document.querySelector('.action-page-2');
      let thirdAction=document.querySelector('.action-page-3');
      let fourthAction=document.querySelector('.action-page-4');
      let firstPage=document.querySelector('.first');
      let secondPage=document.querySelector('.second');
      let thirdpage=document.querySelector('.third');
      let fourthpage=document.querySelector('.fourth');
      let thankyou=document.querySelector('.thankyou');
      let nextstep1=document.querySelector('.firststep');
      let nextstep2=document.querySelector('.secondstep');
      let nextstep3=document.querySelector('.thirdstep');
      let confirm=document.querySelector('.confirm');
      let goback1=document.querySelector('.gotofirst');
      let goback2=document.querySelector('.gotosecond');
      let goback3=document.querySelector('.gotothird');
      let butone=document.querySelector('.button1');
      let buttwo=document.querySelector('.button2');
      let butthree=document.querySelector('.button3');
      let butfour=document.querySelector('.button4');
      let name=document.querySelector('#name');
      let email=document.querySelector('#email');
      let mobile=document.querySelector('#mobile');
      let toggle=document.querySelector('.toggle');
      let monthly=document.querySelector('.monthly');
      let yearly=document.querySelector('.yearly');
      let checkbox=document.querySelector('.checkbox');
      let arcadePrice=document.querySelector('.arcade-price');
      let advancedPrice=document.querySelector('.advanced-price');
      let proPrice=document.querySelector('.pro-price');
      let planInfo=document.querySelectorAll('.planinfo');
      let messageName=document.querySelector('.messagename');
      let messageEmail=document.querySelector('.messageemail');
      let messageMobile=document.querySelector('.messagemobile');
      let alert=document.querySelector('.alert');
      let plantime='Monthly';
      let payment=document.querySelector(".payment");
      let planAppliedFor=document.querySelector(".plan-applied-for");
      let planPayment=document.querySelector(".plan-payment");
      let onlineServiceSummary=document.querySelector(".online-service-summary");
      let onlineServiceSummaryDescription=document.querySelector(".online-service-summary-description");
      let onlineServiceSummaryPrice=document.querySelector(".online-service-summary-price");
      let largerStorageSummary=document.querySelector(".larger-storage-summary");
      let largerStorageSummaryDescription=document.querySelector(".larger-storage-summary-description");
      let largerStorageSummaryPrice=document.querySelector(".larger-storage-summary-price");
      let customizableProfileSummary=document.querySelector(".customizable-profile-summary");
      let customizableProfileSummaryDescription=document.querySelector(".customizable-profile-summary-description");
      let customizableProfileSummaryPrice=document.querySelector(".customizable-profile-summary-price");
      let totalcostType=document.querySelector('.totalcost-type');
      let totalcostValue=document.querySelector('.totalcost-value');
      let changes=document.querySelector('.changes');
      //console.log(totalcostValue);
      let totalYearly=0;
      let totalMonthly=0;
      let planPriceYearly=0;
      let planPriceMonthly=0;
      let priceMatch=new RegExp("^([0-9]{0,})$");
      let checkmarkOnlineService=document.querySelector('.checkmark-online-service');
      let checkmarkLargerStorage=document.querySelector('.checkmark-larger-storage');
      let checkmarkCustomizableProfile=document.querySelector('.checkmark-customizable-profile');
      let addOns={};
      nextstep1.addEventListener('click',()=>{
        if(name.value!='' && email.value!='' && mobile.value!='')
        {
          alert.style.display='none';
          let verifyName=new RegExp("^([a-zA-Z ]{0,})$");
          let verifyEmail=new RegExp("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$");
          let verifyPhoneNo=new RegExp("^([0-9]{10})$");
          if(verifyName.test(name.value)&&verifyEmail.test(email.value)&&verifyPhoneNo.test(mobile.value))
          {
            firstAction.style.display='none';
            secondAction.style.display='';
            buttwo.style.backgroundColor='hsl(206, 94%, 87%)';
            butone.style.backgroundColor='transparent'
            buttwo.style.borderColor='hsl(206, 94%, 87%)';
            butone.style.borderColor='white';
            buttwo.style.color='hsl(213, 96%, 18%)';
            butone.style.color='hsl(217, 100%, 97%)';
            messageName.style.display='none';
            messageEmail.style.display='none'; 
            messageMobile.style.display='none'; 
          }
          else{
            if(!verifyName.test(name.value)){
                messageName.style.position='absolute';
                messageName.style.right=0;
                messageName.innerText='Please Enter Correct Name';
                messageName.style.color="red";
                messageName.style.display='';
            }
            if(verifyName.test(name.value)){
                messageName.style.display='none';
            }
            if(!verifyEmail.test(email.value)){
                messageEmail.style.position='absolute';
                messageEmail.style.right=0;
                messageEmail.innerText='Please Enter Correct Email';
                messageEmail.style.color="red";
                messageEmail.style.display='';
            }
            if(verifyEmail.test(email.value)){
                messageEmail.style.display='none';
            }
            if(!verifyPhoneNo.test(email.value)){
                messageMobile.style.position='absolute';
                messageMobile.style.right=0;
                messageMobile.innerText='Please Enter Correct Phone No';
                messageMobile.style.color="red";
                messageMobile.style.display='';
            }
            if(verifyPhoneNo.test(mobile.value)){
                messageMobile.style.display='none';
            }
          }
        }
        else{
          alert.style.backgroundColor='hsl(229, 24%, 87%)';
          alert.style.color="hsl(213, 96%, 18%)";
          alert.style.display='';
          alert.innerText='Please fill the details';
        }
      })
      goback1.addEventListener('click',()=>{
        firstAction.style.display='';
        secondAction.style.display='none';
        buttwo.style.backgroundColor='transparent';
        butone.style.backgroundColor='hsl(206, 94%, 87%)';
        buttwo.style.borderColor='white';
        butone.style.borderColor='hsl(206, 94%, 87%)';
        buttwo.style.color='hsl(217, 100%, 97%)';
        butone.style.color='hsl(213, 96%, 18%)';
      });
      let count=0;
      let largerStoragePrice=document.querySelector('.larger-storage-price');
      let onlineServicePrice=document.querySelector('.online-service-price');
      let customizableProfilePrice=document.querySelector('.customizable-profile-price');
      checkbox.addEventListener('change',()=>{
          if(checkbox.checked==true){
            monthly.style.color='hsl(231, 11%, 63%)';
            yearly.style.color='hsl(213, 96%, 18%)';
            arcadePrice.innerText='$90/yr';
            advancedPrice.innerText='$120/yr';
            proPrice.innerText='$150/yr';
            largerStoragePrice.innerText='+$20/yr';
            onlineServicePrice.innerText='+10/yr';
            customizableProfilePrice.innerText='+20/yr';
            onlineServiceSummaryPrice.innerText='+$10/yr';
            largerStorageSummaryPrice.innerText='+$20/yr';
            customizableProfileSummaryPrice.innerText='+$20/yr';
            totalcostType.innerText='Total (per year)';
            plantime='Yearly';
            planInfo.forEach((item)=>{
                let offer=document.createElement('div');
                offer.innerText='2 months Free';
                offer.className='offer';
                offer.style.color='hsl(213, 96%, 18%';
                item.appendChild(offer);
            })
          }
          else{
            monthly.style.color='hsl(213, 96%, 18%)';
            yearly.style.color='hsl(231, 11%, 63%)';
            arcadePrice.innerText='$9/yr';
            advancedPrice.innerText='$12/yr';
            proPrice.innerText='$15/yr';
            largerStoragePrice.innerText='+$2/yr';
            onlineServicePrice.innerText='+$1/yr';
            customizableProfilePrice.innerText='+$2/yr';
            onlineServiceSummaryPrice.innerText='+$1/yr';
            largerStorageSummaryPrice.innerText='+$2/yr';
            customizableProfileSummaryPrice.innerText='+$2/yr';
            totalcostType.innerText='Total (per month)';
            plantime='Monthly';
            planInfo.forEach((item)=>{
                let offer=document.querySelector('.offer');
                item.removeChild(offer);
            })
          }
      })
      let plantype='';
      let plancost=0;
      let arcade=document.querySelector('.arcade');
      let advanced=document.querySelector('.advanced');
      let pro=document.querySelector('.pro');
      arcade.addEventListener('click',()=>{
        plantype='Arcade';
        arcade.style.borderColor='hsl(243, 100%, 62%)';
        advanced.style.borderColor='hsl(229, 24%, 87%)';
        pro.style.borderColor='hsl(229, 24%, 87%)';
        arcade.style.backgroundColor="hsl(217, 100%, 97%)";
        advanced.style.backgroundColor="white";
        pro.style.backgroundColor="white";
        plancost=arcadePrice.innerText;
        totalMonthly=9;
        planPriceMonthly=9;
        totalYearly=90;
        planPriceYearly=90;
      })
      advanced.addEventListener('click',()=>{
        plantype='Advanced';
        advanced.style.borderColor='hsl(243, 100%, 62%)';
        arcade.style.borderColor='hsl(229, 24%, 87%)';
        pro.style.borderColor='hsl(229, 24%, 87%)';
        advanced.style.backgroundColor="hsl(217, 100%, 97%)";
        arcade.style.backgroundColor="white";
        pro.style.backgroundColor="white";
        plancost=advancedPrice.innerText;
        totalMonthly=12;
        planPriceMonthly=12;
        totalYearly=120;
        planPriceYearly=120;
      })
      pro.addEventListener('click',()=>{
        plantype='Pro';
        pro.style.borderColor='hsl(243, 100%, 62%)';
        advanced.style.borderColor='hsl(229, 24%, 87%)';
        arcade.style.borderColor='hsl(229, 24%, 87%)';
        pro.style.backgroundColor="hsl(217, 100%, 97%)";
        advanced.style.backgroundColor="white";
        arcade.style.backgroundColor="white";
        plancost=proPrice.innerText;
        totalMonthly=15;
        planPriceMonthly=15;
        totalYearly=150;
        planPriceYearly=150;
      })
      nextstep2.addEventListener('click',()=>{
        if(plantype!=''){
            secondAction.style.display='none';
            thirdAction.style.display='';
            butthree.style.backgroundColor='hsl(206, 94%, 87%)';
            buttwo.style.backgroundColor='transparent';
            butthree.style.borderColor='hsl(206, 94%, 87%)';
            buttwo.style.borderColor='white';
            butthree.style.color='hsl(213, 96%, 18%)';
            buttwo.style.color='hsl(217, 100%, 97%)';
            planAppliedFor.innerText=plantype+'('+plantime+')';
            planPayment.innerText=plancost;
        }
      })
      goback2.addEventListener('click',()=>{
        secondAction.style.display='';
        thirdAction.style.display='none';
        butthree.style.backgroundColor='transparent';
        buttwo.style.backgroundColor='hsl(206, 94%, 87%)'
        butthree.style.borderColor='white';
        buttwo.style.borderColor='hsl(206, 94%, 87%)';
        butthree.style.color='hsl(217, 100%, 97%)';
        buttwo.style.color='hsl(213, 96%, 18%)';
      })

      let addOnsYearly=0;
      let addOnsMonthly=0;
      checkmarkOnlineService.addEventListener('change',()=>{
        if(checkmarkOnlineService.checked==true){
            let addOnPrice=onlineServicePrice.innerText.match(/(\d+)/);
            addOns['Online Service']=addOnPrice[0];
            onlineServiceSummary.style.display='';
            addOnsMonthly+=1;
            addOnsYearly+=10;
        }
        else{
            addOnsMonthly-=1;
            addOnsYearly-=10;
            delete addOns['Online Service'];
            onlineServiceSummary.style.display='none';
        }
      })
      checkmarkLargerStorage.addEventListener('change',()=>{
        if(checkmarkLargerStorage.checked==true){
            let addOnPrice=largerStoragePrice.innerText.match(/(\d+)/);
            addOns['Larger Storage']=addOnPrice[0];
            largerStorageSummary.style.display='';
            addOnsMonthly+=2;
            addOnsYearly+=20;
        }
        else{
            addOnsMonthly-=2;
            addOnsYearly-=20;
            delete addOns['Larger Storage'];
            largerStorageSummary.style.display='none';
        }
      })
      checkmarkCustomizableProfile.addEventListener('change',()=>{
        if(checkmarkCustomizableProfile.checked==true){
            let addOnPrice=customizableProfilePrice.innerText.match(/(\d+)/);
            addOns['Customizable Profile']=addOnPrice[0];
            customizableProfileSummary.style.display='';
            addOnsMonthly+=2;
            addOnsYearly+=20;
            //console.log(addOnPrice);
        }
        else{
            addOnsMonthly-=2;
            addOnsYearly-=20;
            delete addOns['Customizable Profile'];
            customizableProfileSummary.style.display='none';
        }
      })
      nextstep3.addEventListener('click',()=>{
        thirdAction.style.display='none';
        fourthAction.style.display='';
        butfour.style.backgroundColor='hsl(206, 94%, 87%)';
        butthree.style.backgroundColor='transparent';
        butfour.style.borderColor='white';
        butthree.style.borderColor='hsl(206, 94%, 87%)';
        butfour.style.color='hsl(213, 96%, 18%)';
        butthree.style.color='hsl(217, 100%, 97%)';
        //console.log(addOns[0]);
        if(plantime==='Monthly'){
            totalcostValue.innerText="+$"+(totalMonthly+addOnsMonthly)+'/mo';
            planPayment.innerText='+$'+planPriceMonthly+'/mo';
        }
        else{
            totalcostValue.innerText="+$"+(totalYearly+addOnsYearly)+'/yr';
            planPayment.innerText='+$'+planPriceYearly+'/yr';
        }
        // console.log(addOns);
      })
      changes.addEventListener('click',()=>{
        secondAction.style.display='';
        fourthAction.style.display='none';
        butfour.style.backgroundColor='transparent';
        buttwo.style.backgroundColor='hsl(206, 94%, 87%)'
        butfour.style.borderColor='white';
        buttwo.style.borderColor='hsl(206, 94%, 87%)';
        butfour.style.color='hsl(217, 100%, 97%)';
        buttwo.style.color='hsl(213, 96%, 18%)';
      })
      goback3.addEventListener('click',()=>{
        thirdAction.style.display='';
        fourthAction.style.display='none';
        butfour.style.backgroundColor='transparent';
        butthree.style.backgroundColor='hsl(206, 94%, 87%)'
        butfour.style.borderColor='white';
        butthree.style.borderColor='hsl(206, 94%, 87%)';
        butfour.style.color='hsl(217, 100%, 97%)';
        butthree.style.color='hsl(213, 96%, 18%)';
      })
      confirm.addEventListener('click',()=>{
        fourthAction.style.display='none';
        thankyou.style.display='';
      })