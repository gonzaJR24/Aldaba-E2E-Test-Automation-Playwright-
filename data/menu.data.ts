import { Home } from "../pages/home";

interface MenuInterface{
    name: keyof Home,
    url:RegExp,
}

export const menu:MenuInterface[]=[
    {name:'currency', url:/servicios_pre/},
    {name:'registration', url:/login_reg/},
    {name:'customerService', url:/atencionalcliente/},
    {name:'theme', url:/modo/},
]

