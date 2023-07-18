<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Permission;

class permissionsController extends Controller
{
    /**
     * Display the permissions's list here.
     */
    public function view(Request $request): Response
    {
        $permissions = Permission::latest()->get();

        return Inertia::render('Permissions/index', [
            'permissions' => $permissions
        ]);
        // , [
        //     'mustVerifyEmail' => $request->user(),
        //     'status' => session('status'),
        // ]
    }
}
