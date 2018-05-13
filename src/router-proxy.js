let direction = 1;

let curPageTs = 0;

let routerHistory = [];


export default function(router){

    router.afterEach((to,from)=>{
        
        console.log(to,from);
        // next()
    })




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

    // 可以加个标志位区分是js触发的popstate还是前进后退按钮触发的popstate
    // 但是浏览器的前进和后退都会触发popstate => 区分popstate
    window.addEventListener("popstate",function(e){
        console.log(e);
        direction = -1;
    })

}

export {
    direction,
}