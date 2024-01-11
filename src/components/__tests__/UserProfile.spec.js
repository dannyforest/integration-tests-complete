import {mount} from '@vue/test-utils';
import {describe, it, expect} from 'vitest';
import UserProfile from "@/components/UserProfile.vue";
import router from '@/router';

describe('UserProfile', () => {
    it('fetches user and renders name and email', async () => {
        const userId = 1;

        await router.push({ name: 'UserProfile', params: { id: userId } });
        await router.isReady();

        const wrapper = mount(UserProfile, {
            global: {
                plugins: [router],
            },
        });
        await wrapper.vm.fetchUserDataById(userId);

        expect(wrapper.text()).toContain("Leanne Graham");
        expect(wrapper.text()).toContain("Sincere@april.biz");
    });
});
