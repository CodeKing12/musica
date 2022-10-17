<template>
    <vs-sidebar :reduce="true" :reduce-not-hover-expand="true" parent="body" default-index="1"  color="success" class="sidebarx" spacer v-model="active">

        <vs-sidebar-group open title="Application">
            <vs-sidebar-item index="1" icon="menu" @click="reduce=!reduce">
                Toggle Sidebar
            </vs-sidebar-item>
            <vs-sidebar-item index="5" icon="verified_user">
                Configurations
            </vs-sidebar-item>
            <vs-sidebar-group title="Store">
                <vs-sidebar-item index="2.1" icon="store">
                    Store
                </vs-sidebar-item>
                <vs-sidebar-item index="2.2" icon="nature_people">
                    Nature
                </vs-sidebar-item>
                <vs-sidebar-item index="2.3" icon="style">
                    Style
                </vs-sidebar-item>
            </vs-sidebar-group>
            <vs-sidebar-item index="2" icon="gavel">
                History
            </vs-sidebar-item>
            <vs-sidebar-item index="3" icon="https">
                Security
            </vs-sidebar-item>
            <vs-sidebar-item index="4" icon="help">
                Help
            </vs-sidebar-item>
        </vs-sidebar-group>

        <vs-divider icon="person" position="left">
            User
        </vs-divider>

        <vs-sidebar-item index="6" icon="account_box">
            Profile
        </vs-sidebar-item>
        </vs-sidebar>
</template>

<script setup>
    import { ref } from "vue";
    let active = ref(true);
</script>