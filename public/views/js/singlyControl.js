app.controller("singlyControl", function(scope){

    /* question of Singly beam - 10 steps */
    // user : Load, Length(L), Grade of concerete, grade of steel.

      var clearSpan = document.getElementById('clear.......Length');
      var liveLaod = document.getElementById('liveLaod');
      var concereteGrade = document.getElementById('fck');
      var steelGrade = document.getElementById('fy');

    // Step 1 assume approx deminsion of beam //
      var smallDepth = (1/8)*clearSpan;
      var effectiveCover = 20;
      var totalDepth = smallDepth + effectiveCover;
      var totalWidth = (2/3)*totalDepth;



    // Step 2 Calculate effective span //
      var bearing=300;
      var effectiveSpan_l = clearSpan + bearing;
      var effectiveSpan_l = clearSpan + smallDepth;
  //if small vali leni

    // Step 3 Cal. factorial, dead and live load //
      var deadLoad = (effectiveSpan_l + totalWidth + totalDepth)*2500;
      var totalLoad = deadLoad + liveLaod;
      var factorLoad = totalLoad*	1.5;

    //Step 3 factor minimum bending //
      var mu = (factorLoad*effectiveSpan_l*effectiveSpan_l)/8;

    // Step 4 Design beam section as balanced section //

      $scope.smallDepth_assume = function(n){
          smallDepth = (1/n)*clearSpan;
          return smallDepth;
      }

      $scope.cal_smallDepth = function(concereteGrade,totalWidth,steelGrade,mu,smallDepth){
          var mu_Lim, smallDepth_cal , tmp_smallDepth_cal, smallDepth_res ;
          if (steelGrade == 250){
            tmp_smallDepth_cal = mu/(0.148*concereteGrade*totalWidth);
            smallDepth_cal = Math.sqrt(tmp_smallDepth_cal);
          }
          else if (steelGrade == 415) {
            tmp_smallDepth_cal = mu/(0.138*concereteGrade*totalWidth);
            smallDepth_cal = Math.sqrt(tmp_smallDepth_cal);
          }
          else if (steelGrade == 500){
            tmp_smallDepth_cal = mu/(0.133*concereteGrade*totalWidth);
            smallDepth_cal = Math.sqrt(tmp_smallDepth_cal);
          }
        	return = function(){
              if(smallDepth_cal <= smallDepth){
                  smallDepth_res = smallDepth;
                  return smallDepth_res;
              }
              else{
                  scope.smallDepth_assume(9);
                  if(smallDepth_cal <= smallDepth){
                      smallDepth_res = smallDepth;
                  }
                  else{
                      scope.smallDepth_assume(10);
                  }
                  return smallDepth_res;
              }
          }
      }
      $scope.cal_smallDepth(concereteGrade,totalWidth,steelGrade,mu,smallDepth);

    // Step 6 Cal. the area of tensile steel //
      $scope.findAst = function(smallDepth_res, concereteGrade, totalWidth, steelGrade){
          var xuMax ,areaSt, areaSt1, areaSt2, areaSt3;
          if(steelGrade == 250){
              xuMax = 0.53*smallDepth_res;
          }
          else if(steelGrade == 415){
              xuMax = 0.48*smallDepth_res;
          }
          else if(steelGrade == 500){
              xuMax = 0.46*smallDepth_res;
          }
          areaSt1 = (0.36*concereteGrade*totalWidth*xuMax)/(0.87*steelGrade);
          areaSt2 = (0.85*totalWidth*smallDepth_res)/steelGrade;
          areaSt3 = 0.04*totalWidth*totalDepth;
          if(areaSt1 >= areaSt2 && areaSt1 <= areaSt3 ){
              areaSt = areaSt1;
          }
          else if(areaSt1 < areaSt2 ){
              areaSt = areaSt2;
          }
          else if(areaSt1 > areaSt3 ){
              areaSt = areaSt3;
          }
          return areaSt;
      }
      $scope.findAst(smallDepth_res, concereteGrade, totalWidth, steelGrade);

    // find no. of main bars //
      $scope.findMainBars = function(areaSt, smallDepth_res){
          var areaOneBar = (3.14159*smallDepth_res*smallDepth_res)/4;
          var noOfBars = Math.ceil(areaSt/areaOneBar);
          return noOfBars;
      }


} );
