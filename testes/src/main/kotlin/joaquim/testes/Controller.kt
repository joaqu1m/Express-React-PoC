package joaquim.testes

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/usuarios")
class Controller {
    var contador = 0
    @GetMapping
    fun get():String {
        contador++
        return "Opa, bom? oia $contador"
    }
}