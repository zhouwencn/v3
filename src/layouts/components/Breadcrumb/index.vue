<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const breadcrumbs = computed(() => {
  const matched = route.matched;
  return matched.map((item) => ({
    name: item.name,
    path: item.path,
  }));
});
</script>
