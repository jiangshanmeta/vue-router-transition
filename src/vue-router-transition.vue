

<script>
import {direction} from "./router-proxy"

export default{
    functional:true,
    name:"vue-router-transition",
    inheritAttrs:true,
    props:{
        forwardName:{
            type:String,
            required:true,
        },
        backwardName:{
            type:String,
            required:true,
        },
    },
    render(h,{props,listeners,children}){
        console.log(direction)
        const data = {
            on:listeners,
            props:{
                name:direction === 1?props.forwardName:props.backwardName,
            }
        }

        return h('transition',data,children);
    },
}
</script>