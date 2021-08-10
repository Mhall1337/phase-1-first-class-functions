function receivesAFunction(callBack){
    callBack();
    return 'this function has a callback'
}



function returnsANamedFunction(){
   return function functionWithName(){
    return 1+1
   }
}
function returnsAnAnonymousFunction(){
    return function(){
        return 1+1
    }
}
