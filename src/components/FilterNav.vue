<template>
  <nav class="filter-nav">
    <button :class="{active : current ==='all'}"
        @click="updateFilter('all')"
    >View All</button>
    <button :class="{active : current ==='completed'}"
        @click="updateFilter('completed')"
    >completed</button>
    <button :class="{active : current ==='ongoing'}"
        @click="updateFilter('ongoing')"
    >ongoing</button>
  </nav>
</template>

<script>
export default {
    props : ['current'],
    methods : {
        updateFilter(by){
            this.$emit('filterChange',by)
        }
    }
}
</script>

<style>
    .filter-nav button{
        background: none;
        border: none;
        color: rgb(181, 181, 181);
        outline: none;
        font-size: 15px;
        text-transform: uppercase;
        margin-right: 10px;
        letter-spacing: 1px;
        font-weight: bold;
        cursor: pointer;
    }
    .filter-nav button.active{
        color: black
    }
</style>