package joaquim.testes

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = ["http://localhost:3000"])
@RestController
@RequestMapping("/usuarios")
class Controller {

    @GetMapping
    fun get():String {
        return "Opa, bom?"
    }

    @GetMapping("/f")
    fun getF():String {
        return "AAAAA"
    }
}