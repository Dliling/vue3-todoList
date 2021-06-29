<template>
    <div class="item-wrapper">
        <p class="item-content" :class="{'done': item.done}">{{item.content}}</p>
        <el-button
            type="success"
            size="mini"
            @click="handleDone(item.id)"
        >
        finish</el-button>
        <el-button
            type="danger"
            size="mini"
            @click="handleDelete(item.id)"
        >
        delete</el-button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent ({
    props: ['item'],
    setup() {
        const store = useStore()

        const handleDone = id => {
            console.log('handle done')
            store.commit('finishTodo', { id })
        }

        const handleDelete = id => {
            store.commit('removeTodo', { id })
        }

        return {
            handleDone,
            handleDelete
        }
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-wrapper {
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 1.5;
    height: 30px;
    margin: 10px;
}
.item-content {
    margin-right: 10px;
}
.done {
    text-decoration: line-through;
}
</style>
