import { defineInterface } from '@/interfaces/define';
import InterfaceImage from './image.vue';

export default defineInterface(({ i18n }) => ({
	id: 'image',
	name: i18n.t('image'),
	icon: 'insert_photo',
	component: InterfaceImage,
	options: [],
}));
