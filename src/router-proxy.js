let direction = 1;

let curPageTs = 0;

export default function(router){
    console.log(router);

    const oldMethods = {
        push:router.push,
        replace:router.replace,
        go:router.go,
    };

    ['push','replace'].forEach((method)=>{
        router[method] = function(location,onComplete,onAbort,backward=false){
            if(typeof onComplete === 'boolean'){
                backward = onComplete;
                onComplete = undefined;
            }

            if(backward){
                direction = -1;
            }else{
                direction = 1;
            }

            oldMethods[method].call(router,location,onComplete,onAbort);

        }.bind(router)
    });

    router.go = function(n){

        if(n>0){
            direction = 1;
        }else{
            direction = -1;
        }

        oldMethods.go.call(router,n);

    }.bind(router)

    window.addEventListener("popstate",function(e){
        direction = -1;
    })

}

export {
    direction,
}