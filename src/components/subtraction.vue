<template>
    <div>
        <h3>
            当前最新的count值为： {{ $store.state.count}}
        </h3>
        <button @click="btnHandleDecreament">-</button>
        <button @click="btnHandleDecreament1">-n</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    data(){
        return {}
    },
    computed: {
        ...mapState(['count'])
    },
    methods: {
        ...mapMutations(['decr', 'decrN']),

        btnHandleDecreament(){
            // this.$store.commit('decr')
            this.decr()
        },
        btnHandleDecreament1(){
            this.decrN(5)
        }
    }
} 
</script>