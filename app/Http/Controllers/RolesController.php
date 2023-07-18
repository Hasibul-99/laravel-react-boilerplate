<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class RolesController extends Controller
{
    public function view(Request $request): Response
    {
        $roles = DB::table('roles')->paginate(15);

        return Inertia::render('Roles/index', [
            'roles' => $roles
        ]);
    }
}
