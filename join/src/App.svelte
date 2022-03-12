<script lang="ts">
  import googleForm from './form.json'
  import { slide } from 'svelte/transition'

  let fileds = googleForm.fields.filter((field) => field.type != undefined)

  const googleFormSubmit =
    'https://docs.google.com/forms/d/e/1FAIpQLSc-y3-L5sg-oke74YSYGpL6dc_ZzfVKoog_w1DQLDAyRilemw/formResponse'

  let completed = false
</script>

<div
  data-theme="mytheme"
  class="text-[#3A4F66] px-10 lg:px-1/3 py-15"
  dir="rtl"
>
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

      <h3 class="!font-bold !text-xl ">بيانات تقديم الانضمام لفريق ونس</h3>
      {#each fileds as filed}
        <div class="!form-control">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="!label">
            <span class="!label-text text-lg">{filed.label.split('زي')[0]}</span
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
              class="!input !input-bordered !input-primary"
              type="text"
              placeholder={filed.label.split('زي')[1]}
              name={'entry.' + filed.id}
              required
            />
          {/if}
        </div>
      {/each}
      <button
        class="btn btn-primary hover:bg-primary-focus text-white mt-5 w-full"
        type="submit">سجل طلبك</button
      >
    </form>
  {:else}
    <div class="text-xl font-bold ">لقد تم تسجيل طلبك بنجاح</div>
  {/if}
</div>
