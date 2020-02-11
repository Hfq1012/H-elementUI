<template>
  <div class="dragList">
    <div class="plugins-tips">
      Vue.Draggable：基于 Sortable.js 的 Vue 拖拽组件。
      访问地址：<a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">Vue.Draggable</a>
    </div>
    <div class="drag-box">
      <div class="drag-box-item">
        <div class="item-title">todo</div>
        <draggable v-model="todo" @remove="removeHandle" :options="dragOptions">
          <transition-group tag="div" id="todo" class="item-ul">
            <div class="drag-list" v-for="item in todo" :key="item.content">{{ item.content }}</div>
          </transition-group> 
        </draggable>
      </div>
      <div class="drag-box-item">
        <div class="item-title">doing</div>
        <draggable v-model="doing" @remove="removeHandle" :options="dragOptions">
          <transition-group tag="div" id="doing" class="item-ul">
            <div class="drag-list" v-for="item in doing" :key="item.content">{{ item.content }}</div>
          </transition-group> 
        </draggable>
      </div>
      <div class="drag-box-item">
        <div class="item-title">done</div>
        <draggable v-model="done" @remove="removeHandle" :options="dragOptions">
          <transition-group tag="div" id="done" class="item-ul">
            <div class="drag-list" v-for="item in done" :key="item.content">{{ item.content }}</div>
          </transition-group> 
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    data() {
      return {
        dragOptions: {
          animation: 120,
          scroll: true,
          group: 'sortlist',
          ghostClass: 'ghost-style'
        },
        todo: [
          { id: 1, content: '开发图表组件' },
          { id: 2, content: '开发拖拽组件' },
          { id: 3, content: '开发权限测试组件' }
        ],
        doing: [
          { id: 1, content: '开发登录注册页面' },
          { id: 2, content: '开发头部组件' },
          { id: 3, content: '开发表格相关组件' },
          { id: 4, content: '开发表单相关组件' }
        ],
        done: [
          { id: 1, content: '初始化项目，生成工程目录，完成相关配置' },
          { id: 2, content: '开发项目整体框架' }
        ]
      }
    },
    components: {
      draggable
    },
    methods: {
      removeHandle(event){
        this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
      }
    }
  }
</script>
