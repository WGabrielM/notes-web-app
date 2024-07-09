package com.assessment.notes_web_app_backend.infra.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Desabilita o CSRF para simplificação, não recomendado para produção
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/notes").permitAll() // Permite acesso público ao endpoint /notes
                        .anyRequest().authenticated() // Requer autenticação para qualquer outro endpoint
                );
        return http.build();
    }
}
