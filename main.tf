terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=4.1.0"
    }
  }
}
provider "azurerm" {
  features {}
}

terraform {
  backend "azurerm" {
    resource_group_name  = "rg-03"
    storage_account_name = "warsztatowe3245"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}

resource "azurerm_service_plan" "example" {
  name                = "example-app-service-plan-myt2s"
  location            = "westeurope"
  resource_group_name = "rg-03"
  os_type             = "Linux"
  sku_name            = "P0v3"
}

resource "azurerm_linux_web_app" "example" {
  name                = "example-webapp-tutajnazwa333"
  location            = "westeurope"
  resource_group_name = "rg-03"
  service_plan_id     = azurerm_service_plan.example.id
  site_config {}
}

resource "azurerm_storage_container" "gallery" {
  name                  = "gallery"
  storage_account_name = azurerm_storage_account.gallery_storage.name
  container_access_type = "blob"
}

resource "azurerm_storage_account" "gallery_storage" {
  name                     = "gallery33737ss"
  resource_group_name      = "rg-03"
  location                 = "westeurope"
  account_tier             = "Standard"
  account_replication_type = "LRS"
}
