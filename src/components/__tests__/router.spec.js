import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';

import UserList from '@/components/UserList.vue';
import UserProfile from "@/components/UserProfile.vue";
import App from '@/App.vue';
import router from '@/router';

describe('Router', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(App, {
            global: {
                plugins: [router],
            },
        });
    })

    const checkComponentOnPush = async (route, component) => {
        await router.push(route);
        await router.isReady();

        expect(wrapper.findComponent(component).exists()).toBe(true);
    }

    it('renders UserList component on / route', async () => await checkComponentOnPush('/', UserList));
    it('renders UserProfile component on / user/:id route', async () => await checkComponentOnPush('/user/123', UserProfile));
});
