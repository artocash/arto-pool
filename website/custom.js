/* Insert your pool's unique Javascript here */

    function numberWithCommas(x) {                                                                                                                                                                                                    │·······
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");                                                                                                                                                                    │·······
    }                                                                                                                                                                                                                                 │·······
                                                                                                                                                                                                                                      │·······
    function getReadableString(strings){                                                                                                                                                                                              │·······
        var i = 0;                                                                                                                                                                                                                    │·······
        var byteUnits = [' ', ' K', ' M', ' G', ' T', ' P' ];                                                                                                                                                                         │·······
        while (strings > 1000){                                                                                                                                                                                                       │·······
            strings = strings / 1000;                                                                                                                                                                                                 │·······
            i++;                                                                                                                                                                                                                      │·······
        }                                                                                                                                                                                                                             │·······
        return strings.toFixed(2) + byteUnits[i];                                                                                                                                                                                     │·······
    }                                                                                                                                                                                                                                 │·······
                                                                                                                                                                                                                                      │·······
                                                                                                                                                                                                                                      │·······
   function formatRound(difficulty, shares) {                                                                                                                                                                                         │·······
        var percent = Math.round(shares / difficulty * 100);                                                                                                                                                                          │·······
        if(!percent) {                                                                                                                                                                                                                │·······
               return '?';                                                                                                                                                                                                            │·······
        }                                                                                                                                                                                                                             │·······
        else if(percent <= 100) {                                                                                                                                                                                                     │·······
               return '(' + percent + '%)';                                                                                                                                                                                           │·······
         }                                                                                                                                                                                                                            │·······
         else {                                                                                                                                                                                                                       │·······
              return '(' + percent + '%)';                                                                                                                                                                                            │·······
        }                                                                                                                                                                                                                             │·······
   }   
