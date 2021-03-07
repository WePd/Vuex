<template>
    <div>
        <h3>
            当前最新的count值为: {{ count }}
        </h3>
        <button>+</button>
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
    }
}
</script>