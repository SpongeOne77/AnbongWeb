<script lang="ts" setup>
import Card from "@/components/layout/Card.vue";
</script>
<template>
  <card>
    <template v-slot:title>
      关于我们
    </template>
    <template v-slot:content>
      <div>&bull;   公司简介</div>
      <div class="my-2 flex justify-between">
        <div class="text-gray-500 text-xs mr-16 leading-6 mb-10">[公司名称]成立于[成立年份]，总部位于[总部所在地]。作为一家专注于[行业/领域]的[企业类型，如创新科技公司、跨国企业等]，我们致力于为全球客户提供[主要产品或服务类型，如高品质的消费电子产品、专业的IT解决方案等]。经过多年的发展，[公司名称]已经成为行业内的佼佼者，拥有广泛的客户群体和良好的市场声誉。

          我们的核心价值观包括：

          1. 客户至上：始终以客户需求为导向，为客户提供优质的产品和服务，帮助客户实现价值最大化。

          2. 创新驱动：不断追求技术和管理创新，以提高产品竞争力和公司运营效率。

          3. 团队协作：鼓励员工之间的沟通与合作，共同为实现公司目标而努力。

          4. 社会责任：关注环境保护和社会公益事业，积极履行企业社会责任。

          我们的业务范围涵盖了[具体业务领域，如软件开发、硬件制造等]，并在[主要市场或地区，如北美、欧洲、亚洲等]设有分支机构。我们的产品和技术广泛应用于[应用领域，如通信、医疗、教育等]，为各行各业的客户提供了高效、可靠的解决方案。

          未来，[公司名称]将继续秉承“[企业愿景或使命，如引领科技创新、创造美好生活等]”的企业愿景，与全球客户携手共创美好未来。
        </div>
        <img class="about-us_profile-photo" src="/src/assets/pic1.png" />
      </div>
      <div>&bull;   企业文化</div>
      <div class="my-2 flex justify-between">

      </div>
    </template>
  </card>
</template>
<style lang="css" scoped>
.about-us_profile-photo {
  min-width: 400px;
}
</style>