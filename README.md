# Prototypanwendung zur Bachelorthesis von Stipe Knez

Diese Anwendung hat zwei Variationen. In der ersten Variation wird eine passwortbasierte Authentfizierung durchgeführt und in der zweiten Version eine passwortlose Authentifizierung. Beide Variaten unterscheiden sich nur in der Keycloak-Konfiguration. Um von einer Variante zur anderen zu wechseln,

# Was wird benötigt?
- OpenJDK 11
- Keycloak 18.0.0
- Node 14.15.1 / npm 6.14.8 
- WebStorm / IntelliJ zum Ausführen der Projekte (Angular und Spring Boot)

# Vorbereitung
Zunächst müssen Sie die vohandene Keycloak-Konfigurations datei in ihre Keycloak-Anwendung importieren. Dazu:
1. Starten Sie Keycloak über die Kommandozeile aus dem Keycloak "bin"-Ordner mit dem Befehl "kc start-dev"
2. Rufen Sie die Keycloak Admin-Konsole unter localhost:8080 auf
3. Loggen Sie sich mit dem Nuternamen: admin und Passwort: admin ein
4. Wählen Sie das "Thesis" Realm aus
5. Klicken Sie Links in der Leiste unter "Manage" auf import
6. Klicken Sie auf select file und wählen sie die Konfiguraitonsdatei aus

Beachten Sie, dass zu Beginn der Login mittels WebAuthn eingestellt ist. Wie sie das ändern könne, erfahren sie weiter unten.
Zusätzlich müssen sie zum passwortlosen Login ein Sicherheitstoken registrieren. Dies ist wie folgt möglich:

1. Rufen Sie nach dem Start von Keycloak "localhost:8080/realms/Thesis/account/" auf
2. Gegenebenfalls müssen Sie sich erneut einloggen. (Nutzername "stipe" und Passwort "knez")
3. Es erscheint die Account-konsole. Klicken Sie unter "Account Security" auf "Signing in"
4. Scrollen Sie runter zu "Passwordless" und entfernen sie den registrierten YubiKey 5 NFC.
5. Klicken Sie rechts auf "Set up Security Key"
6. Folgend Sie den Anweisungen
7. Nun können Sie Ihr Token zum Login nutzen. Starten sie die Prototypanwendung und den Microservice.

# Wie starte ich die Prototypanwendung und den Microservice?

1. Starten Sie Keycloak über die Kommandozeile aus dem Keycloak-bin-Ordner mit dem Befehl "kc start-dev"
2. Starten Sie das Frontend und den Microservice über die IDE. Das Frontend ist in "No-Backend-Angular" und der Microservice in "Microservice"
 enthalten.
3. Öffnen Sie den Browser auf dem Port localhost:4200
4. Die Anwendung ist bereit. Die Funktionsweise ist in der dazugehörigen Thesis in Kapitel 4.3.3 erklärt.

# Wie wechsele ich die Authentifikationsmethode?

Beim ersten Start ist WebAuthn zur Authentifizierung eingerichtet. Sie können die methode ändern, indem Sie:

1. Die Keycloak Admin-Konsole unter localhost:8080 aufrufen
2. Sich mit dem Nuternamen: admin und Passwort: admin, einloggen
3. das "Thesis" Realm auswählen
4. In der Liste links auf "Clients" klick und in der erscheinenden Ansicht auf der rechten Seite unter "ClientID" den "no-backend-client" wählen.
5. Im Reiter "Settings" ganz unten auf die Fläche "Authentication Flow Overrides" klicken
6. Hier anstatt des "Browser Passwordless WebAuthn Flow", die leere Zeile auswählen und dies ganz unten auf der Seite speichern.
7. Nun laden Sie die Anwendung neu und klicken auf Login. Hier wird Ihnen jetzt der Login mit dem Nutzernamen "stipe" und dem Passwort "knez" ermöglicht.
8. Nach dem Login können Sie die Applikation wie gewohnt bedienen.

Wenn Sie auf die Authentifikation mit WebAuthn zurückwechseln wollen, führen Sie die Schritte erneut aus, aber wechseln in Schritt 6 wieder auf den "Browser Passwordless WebAuthn Flow" zurück.

Bei Fragen wenden Sie sich gerne an mich unter: stipek55@gmail.com
