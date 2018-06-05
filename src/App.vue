<template>
    <div id="layout-container" :class="['layout-page-' + $route.name]">
        <transition>
            <keep-alive>
                <router-view name="keepAlive"></router-view>
            </keep-alive>
        </transition>

        <transition>
            <keep-alive>
                <router-view name="Default"></router-view>
            </keep-alive>
        </transition>

        <transition>
            <keep-alive>
                <router-view name="Search"></router-view>
            </keep-alive>
        </transition>

        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'App'
}
</script>
