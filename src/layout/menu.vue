<template lang="html">
<div class="layout-page layout-page-full clearfix">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'LayoutMenuPage'
}
</script>

<style lang="less">

</style>
