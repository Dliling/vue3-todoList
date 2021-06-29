<template>
    <h3>vue3-todolist</h3>
    <div class="list-wrapper">
        <el-input
            v-model="newContent"
            placeholder="请输入内容"
            @keydown.enter="handleAddItem"
        ></el-input>
        <template v-for="item in todos" :key="item.id">
        <TodoItem :item="item"></TodoItem>
        </template>
    </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import TodoItem from "./TodoItem";
import { useStore } from "vuex";

export default defineComponent({
    components: {
        TodoItem,
    },
    setup() {
        let newContent = ref("");

        const store = useStore();

        const todos = computed(() => store.state.todos);

        const handleAddItem = () => {
            store.commit("addTodo", {
                content: newContent.value
            });
            newContent.value = ''
        };

        return {
            newContent,
            todos,
            handleAddItem,
        };
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-wrapper {
  width: 30%;
  margin: 0 auto;
}
</style>
