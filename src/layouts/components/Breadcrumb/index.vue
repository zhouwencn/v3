<script lang="ts" setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const breadcrumbs = computed(() => {
  const matched = route.matched
  return matched.map(item => ({
    name: item.name,
    path: item.path
  }))
})
</script>
