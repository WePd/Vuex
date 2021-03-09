<template>
    <div>
        <h3>
            当前最新的count值为： {{ $store.state.count}}
        </h3>
        <button @click="btnHandleDecreament">-</button>
        <button @click="btnHandleDecreament1">-n</button>
        <button @click="subNAsync(5)">-n Async</button>
        <h3>
            {{ $store.getters.showNumber }}
        </h3>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    data(){
        return {}
    },
    computed: {
        ...mapState(['count'])
    },
    methods: {
        ...mapMutations(['decr', 'decrN']),
        ...mapActions(['subNAsync']),

        btnHandleDecreament(){
            // this.$store.commit('decr')
            this.decr()
        },
        btnHandleDecreament1(){
            this.decrN(5)
        },
    }
} 
</script>