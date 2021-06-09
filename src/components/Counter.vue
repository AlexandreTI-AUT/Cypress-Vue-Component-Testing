<template>
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
    name: "Counter",
    props: {
        msg: String,
    },
}
</script>