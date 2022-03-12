<script lang="ts">
  import googleForm from './form.json'
  import { slide } from 'svelte/transition'

  let fileds = googleForm.fields.filter((field) => field.type != undefined)
  let filedsForCustomer = googleForm.fields
    .filter((field) => field.type != undefined)
    .slice(0, 4)
  let filedsForElder = googleForm.fields
    .filter((field) => field.type != undefined)
    .slice(4)
  console.log(filedsForCustomer)

  const googleFormSubmit =
    'https://docs.google.com/forms/d/e/1FAIpQLSfBOIeX8YcMJevDyLJv_nIKdMFbSEm9on70ZYQSc1W42pH6bw/formResponse'

  let completed = false
</script>

<div data-theme="light" class="text-[#3A4F66] px-10 lg:px-1/3 py-15" dir="rtl">
  {#if !completed}
    <form
      on:submit={() => (completed = !completed)}
      action={googleFormSubmit}
      method="post"
      target="form"
      transition:slide
    >
      <iframe
        class="visibility: hidden"
        title="form"
        name="form"
        frameborder="0"
      />

      <div class="">
        <h3 class="font-bold text-xl ">بيانات طالب الخدمة</h3>
        {#each filedsForCustomer as filed}
          <div class="!form-control">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="!label">
              <span class="!label-text !text-lg"
                >{filed.label.split('زي')[0]}</span
              >
            </label>
            <input
              class="!input !input-primary !input-bordered"
              type="text"
              name={'entry.' + filed.id}
              placeholder={filed.label.split('زي')[1]}
              required
            />
          </div>
        {/each}
        <div class="font-bold text-xl mt-7">
          بيانات كبير السن (المقدم له الخدمة)
        </div>

        {#each filedsForElder as filed}
          <div class="!form-control">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="!label">
              <span class={'!label-text !text-lg'}
                >{filed.label.split('زي')[0]}</span
              >
            </label>
            {#if filed.type == 'LONG_ANSWER'}
              <textarea
                class="!textarea !textarea-bordered !textarea-primary"
                name={'entry.' + filed.id}
                placeholder={filed.label.split('زي')[1]}
                required
              />
            {:else}
              <input
                class="!input !input-primary !input-bordered"
                type="text"
                name={'entry.' + filed.id}
                placeholder={filed.label.split('زي')[1]}
                required
              />
            {/if}
          </div>
        {/each}
        <button
          class="btn btn-primary hover:bg-primary-focus text-white mt-5 w-full"
          type="submit">سجل طلبك</button
        >
      </div>
    </form>
  {:else}
    <div class="text-xl font-bold ">لقد تم تسجيل طلبك بنجاح</div>
  {/if}
</div>
