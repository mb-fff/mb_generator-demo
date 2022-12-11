import { ref, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

export const useCommonPage = () => {

  const $router = useRouter()
  const conditionRef = ref()
  const contentRef = ref()
  const contentHeight = ref(0)
  const contentHeightStyle = computed(() => `calc(100% - 60px - ${conditionRef.value?.offsetHeight}px)`)

  const back = (name: string = '') => {
    $router.push({ name })
  }

  onMounted(() => {
    nextTick(() => {
      contentHeight.value = contentRef.value.offsetHeight
    })
  })

  return {
    contentHeightStyle,
    contentHeight,
    conditionRef,
    contentRef,
    back
  }
}