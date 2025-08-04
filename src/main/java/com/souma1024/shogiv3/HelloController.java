package com.souma1024.shogiv3;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class HelloController {
    @GetMapping("/")
    public String Hello() {
        return "index";
    }
}
