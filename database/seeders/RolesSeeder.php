<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role_suder_admin = Role::create(['name' => 'Super Admin']);
        $role_operation_admin = Role::create(['name' => 'Operation Admin']);

        $permission_view = Permission::create(['name' => 'view users']);
        $permission_edit = Permission::create(['name' => 'edit users']);
        $permission_create = Permission::create(['name' => 'create users']);
        $permission_delete = Permission::create(['name' => 'delete users']);

        $permission_super_admin = [ $permission_view, $permission_edit, $permission_create, $permission_delete];

        $role_suder_admin->syncPermissions($permission_super_admin);
        $role_operation_admin->givePermissionTo($permission_view);
    }
}
