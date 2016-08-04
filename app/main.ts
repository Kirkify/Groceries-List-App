import {setStatusBarColors} from "./utils/status-bar-util";
import "reflect-metadata";
import {HTTP_PROVIDERS} from "@angular/http";
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {APP_ROUTER_PROVIDERS} from "./app.routes";

setStatusBarColors();

nativeScriptBootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);