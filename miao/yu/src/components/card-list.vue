<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index" >
                <div v-if="index<length">
                    <img :key="item.img" alt="">
                    <div class="title">{{item.title}}</div>
                    <div class="text">{{item.text}}</div>
          </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["list","length"]
}
</script>