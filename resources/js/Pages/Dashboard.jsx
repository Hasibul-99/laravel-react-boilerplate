import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { DatePicker } from 'antd';


export default function Dashboard({ auth }) {
    console.log("auth", auth);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>

                    {
                        auth?.permissions?.map(per => <h4 key={per}>{per}</h4>)
                    }
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
