import { mount } from '@vue/test-utils';
import UserList from '@/components/UserList.vue';
import axios from 'axios';
import { describe, it, expect, vi } from 'vitest';

// Mock axios
vi.mock('axios', () => ({
    default: {
        get: vi.fn(),
    },
}));

describe('UserList', () => {
    it('fetches users and renders them', async () => {
        // Mock data to be returned by the axios call
        const users = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
        ];

        // Mock implementation of axios.get
        axios.get.mockResolvedValue({ data: users });

        const wrapper = mount(UserList);
        await wrapper.vm.fetchUsers();

        // Assertions
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');

        // TODO: Add missing tests
        // Hint 1: do we have the right number of <li>?
        // Hint 2: are the usernames I expect displayed on the page?
    });
});
