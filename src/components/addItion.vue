<template>
    <div>
        <h3>
            当前最新的count值为: {{ count }}
        </h3>
        <button @click="btnHandleAdd">+</button>
        <button @click="btnHandleAddN">+n</button>
        <button @click="btnHandleAddN1">+5 async</button>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    computed: {
        count(){
            return this.$store.state.count
        }
    },
    methods: {
       btnHandleAdd(){
           //触发mutations的第一种方式
           this.$store.commit('add')
       },
       btnHandleAddN(){
           this.$store.commit('addN', 5)
       },
       //异步让count自增
        btnHandleAddN1(){
            this.$store.dispatch('addAsync', 5)
        }
    }
}
</script>