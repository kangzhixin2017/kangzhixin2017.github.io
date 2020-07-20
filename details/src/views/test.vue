<template>
  <div class="overall">
    <!-- 拖拽 -->
    <SlickList
      :lockToContainerEdges="true"
      axis="x"
      lockAxis="x"
      v-model="items"
      class="SortableList"
      @input="getChangeLists"
      
    >
      <SlickItem v-for="(item, index) in items" class="SortableItem" :index="index" :key="index">
         <div class="title">{{ item.name }}</div>
          <SlickList :lockToContainerEdges="true" useDragHandle="true" class="list" lockAxis="y" v-model="item.itemArr" @input="getChangeList">
            <SlickItem
              class="list-item"
              v-for="(item, index) in item.itemArr"
              :index="index"
              :key="index"
              useDragHandle="true"
            >{{ item }}</SlickItem>
          </SlickList>
      </SlickItem>
    </SlickList>
  </div>
</template>
 
<script>
// 安装 npm install --save vue-slicksort
import { SlickList, SlickItem } from "vue-slicksort";
export default {
  components: {
    SlickItem,
    SlickList
  },
  data() {
    return {
      flag: true,
      items: [
        {
          name: "Tab-1",
          itemArr: ["1-1", "1-2", "1-3","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2","1-2"]
        },
      ]
    };
  },
  methods: {
    getChangeList(val) {
      console.log(val, "二级");
    },
    getChangeLists(vals) {
    //  拖拽完成后返回被打乱后的顺序
      console.log(vals, "一级");
    }
  }
};
</script>
