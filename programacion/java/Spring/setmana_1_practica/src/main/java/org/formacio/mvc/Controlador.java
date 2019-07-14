package org.formacio.mvc;

import org.formacio.component.ServeiAlumnat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
private class Controlador {

    @Autowired
    ServeiAlumnat serveiAlumnat;

    @RequestMapping(path = "/alumnes")
    @ResponseBody
    public int numeroDeAlumnes() {
        return serveiAlumnat.nombreAlumnes();
    }
}
