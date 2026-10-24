import {createFileRoute,redirect} from '@tanstack/react-router';
export const Route=createFileRoute('/services/managed')({beforeLoad:()=>{throw redirect({to:'/strategy',statusCode:301})}});
