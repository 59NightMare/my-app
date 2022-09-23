<template>
    <div class="tab-head">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
</template>
<script>
import { Search } from 'vant';
export default {

}
</script>
<style lang="scss">
.tab-head {
    .meun-box {
        display: inline-block;
    }

    .search-box {
        display: inline-block;
    }
}
</style>