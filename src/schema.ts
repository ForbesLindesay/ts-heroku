import BaseHerokuAPIClient from "./BaseHerokuAPIClient";

export interface HerokuPlatformAPIAccountFeature {
  /**
   * when account feature was created
   */
  readonly "created_at": string;

  /**
   * description of account feature
   */
  readonly "description": string;

  /**
   * documentation URL of account feature
   */
  readonly "doc_url": string;

  /**
   * whether or not account feature has been enabled
   */
  readonly "enabled": boolean;

  /**
   * unique identifier of account feature
   */
  readonly "id": string;

  /**
   * unique name of account feature
   */
  readonly "name": string;

  /**
   * state of account feature
   */
  readonly "state": string;

  /**
   * when account feature was updated
   */
  readonly "updated_at": string;

  /**
   * user readable feature name
   */
  readonly "display_name": string;

  /**
   * e-mail to send feedback about the feature
   */
  readonly "feedback_email": string;
}

export class HerokuPlatformAPIAccountFeatureClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for an existing account feature.
   */
  info(
    accountFeatureIdentity: string
  ): Promise<HerokuPlatformAPIAccountFeature> {
    return this._client.request(
      "GET",
      "/account/features/{(%23%2Fdefinitions%2Faccount-feature%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Faccount-feature%2Fdefinitions%2Fidentity)": accountFeatureIdentity
      }
    );
  }

  /**
   * List existing account features.
   */
  list(): Promise<Array<HerokuPlatformAPIAccountFeature>> {
    return this._client.request("GET", "/account/features", {});
  }

  /**
   * Update an existing account feature.
   */
  update(
    accountFeatureIdentity: string,
    requestBody: {
      /**
       * whether or not account feature has been enabled
       */
      readonly "enabled": boolean;
    }
  ): Promise<HerokuPlatformAPIAccountFeature> {
    return this._client.request(
      "PATCH",
      "/account/features/{(%23%2Fdefinitions%2Faccount-feature%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Faccount-feature%2Fdefinitions%2Fidentity)": accountFeatureIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPIAccount {
  /**
   * whether to allow third party web activity tracking
   */
  readonly "allow_tracking": boolean;

  /**
   * whether allowed to utilize beta Heroku features
   */
  readonly "beta": boolean;

  /**
   * when account was created
   */
  readonly "created_at": string;

  /**
   * unique email address of account
   */
  readonly "email": string;

  /**
   * whether the user is federated and belongs to an Identity Provider
   */
  readonly "federated": boolean;

  /**
   * unique identifier of an account
   */
  readonly "id": string;

  /**
   * Identity Provider details for federated users.
   */
  readonly "identity_provider": null | {
    /**
     * unique identifier of this identity provider
     */
    readonly "id": string;

    /**
     * 
     */
    readonly "organization": {
      /**
       * unique name of organization
       */
      readonly "name": string;
    };
  };

  /**
   * when account last authorized with Heroku
   */
  readonly "last_login": null | string;

  /**
   * full name of the account owner
   */
  readonly "name": null | string;

  /**
   * SMS number of account
   */
  readonly "sms_number": null | string;

  /**
   * when account was suspended
   */
  readonly "suspended_at": null | string;

  /**
   * when account became delinquent
   */
  readonly "delinquent_at": null | string;

  /**
   * whether two-factor auth is enabled on the account
   */
  readonly "two_factor_authentication": boolean;

  /**
   * when account was updated
   */
  readonly "updated_at": string;

  /**
   * whether account has been verified with billing information
   */
  readonly "verified": boolean;

  /**
   * organization selected by default
   */
  readonly "default_organization": null | {
    /**
     * unique identifier of organization
     */
    readonly "id": string;

    /**
     * unique name of organization
     */
    readonly "name": string;
  };
}

export class HerokuPlatformAPIAccountClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for account.
   */
  info(): Promise<HerokuPlatformAPIAccount> {
    return this._client.request("GET", "/account", {});
  }

  /**
   * Update account.
   */
  update(requestBody: {
    /**
     * whether to allow third party web activity tracking
     */
    readonly "allow_tracking": boolean;

    /**
     * whether allowed to utilize beta Heroku features
     */
    readonly "beta": boolean;

    /**
     * full name of the account owner
     */
    readonly "name": null | string;
  }): Promise<HerokuPlatformAPIAccount> {
    return this._client.request("PATCH", "/account", {}, requestBody);
  }

  /**
   * Delete account. Note that this action cannot be undone.
   */
  delete(): Promise<HerokuPlatformAPIAccount> {
    return this._client.request("DELETE", "/account", {});
  }

  /**
   * Info for account.
   */
  infoByUser(accountIdentity: string): Promise<HerokuPlatformAPIAccount> {
    return this._client.request(
      "GET",
      "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)": accountIdentity
      }
    );
  }

  /**
   * Update account.
   */
  updateByUser(
    accountIdentity: string,
    requestBody: {
      /**
       * whether to allow third party web activity tracking
       */
      readonly "allow_tracking": boolean;

      /**
       * whether allowed to utilize beta Heroku features
       */
      readonly "beta": boolean;

      /**
       * full name of the account owner
       */
      readonly "name": null | string;
    }
  ): Promise<HerokuPlatformAPIAccount> {
    return this._client.request(
      "PATCH",
      "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)": accountIdentity
      },
      requestBody
    );
  }

  /**
   * Delete account. Note that this action cannot be undone.
   */
  deleteByUser(accountIdentity: string): Promise<HerokuPlatformAPIAccount> {
    return this._client.request(
      "DELETE",
      "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)": accountIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIAddOn {
  /**
   * provider actions for this specific add-on
   */
  readonly "actions": Array<{}>;

  /**
   * identity of add-on service
   */
  readonly "addon_service": {
    /**
     * unique identifier of this add-on-service
     */
    readonly "id": string;

    /**
     * unique name of this add-on-service
     */
    readonly "name": string;
  };

  /**
   * billing application associated with this add-on
   */
  readonly "app": {
    /**
     * unique identifier of app
     */
    readonly "id": string;

    /**
     * unique name of app
     */
    readonly "name": string;
  };

  /**
   * config vars exposed to the owning app by this add-on
   */
  readonly "config_vars": Array<string>;

  /**
   * when add-on was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of add-on
   */
  readonly "id": string;

  /**
   * globally unique name of the add-on
   */
  readonly "name": string;

  /**
   * identity of add-on plan
   */
  readonly "plan": {
    /**
     * unique identifier of this plan
     */
    readonly "id": string;

    /**
     * unique name of this plan
     */
    readonly "name": string;
  };

  /**
   * id of this add-on with its provider
   */
  readonly "provider_id": string;

  /**
   * state in the add-on's lifecycle
   */
  readonly "state": string;

  /**
   * when add-on was updated
   */
  readonly "updated_at": string;

  /**
   * URL for logging into web interface of add-on (e.g. a dashboard)
   */
  readonly "web_url": null | string;
}

export class HerokuPlatformAPIAddOnActionClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Mark an add-on as provisioned for use.
   */
  provision(addOnIdentity: string): Promise<HerokuPlatformAPIAddOn> {
    return this._client.request(
      "POST",
      "/addons/{(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)}/actions/provision",
      {
        "(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)": addOnIdentity
      }
    );
  }

  /**
   * Mark an add-on as deprovisioned.
   */
  deprovision(addOnIdentity: string): Promise<HerokuPlatformAPIAddOn> {
    return this._client.request(
      "POST",
      "/addons/{(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)}/actions/deprovision",
      {
        "(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)": addOnIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIAddOnAttachment {
  /**
   * identity of add-on
   */
  readonly "addon": {
    /**
     * unique identifier of add-on
     */
    readonly "id": string;

    /**
     * globally unique name of the add-on
     */
    readonly "name": string;

    /**
     * billing application associated with this add-on
     */
    readonly "app": {
      /**
       * unique identifier of app
       */
      readonly "id": string;

      /**
       * unique name of app
       */
      readonly "name": string;
    };

    /**
     * identity of add-on plan
     */
    readonly "plan": {
      /**
       * unique identifier of this plan
       */
      readonly "id": string;

      /**
       * unique name of this plan
       */
      readonly "name": string;
    };
  };

  /**
   * application that is attached to add-on
   */
  readonly "app": {
    /**
     * unique identifier of app
     */
    readonly "id": string;

    /**
     * unique name of app
     */
    readonly "name": string;
  };

  /**
   * when add-on attachment was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of this add-on attachment
   */
  readonly "id": string;

  /**
   * unique name for this add-on attachment to this app
   */
  readonly "name": string;

  /**
   * attachment namespace
   */
  readonly "namespace": null | string;

  /**
   * when add-on attachment was updated
   */
  readonly "updated_at": string;

  /**
   * URL for logging into web interface of add-on in attached app context
   */
  readonly "web_url": null | string;
}

export class HerokuPlatformAPIAddOnAttachmentClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new add-on attachment.
   */
  create(requestBody: {
    /**
     * 
     */
    readonly "addon": string;

    /**
     * 
     */
    readonly "app": string;

    /**
     * whether or not to allow existing attachment with same name to be replaced
     */
    readonly "force": boolean;

    /**
     * unique name for this add-on attachment to this app
     */
    readonly "name": string;

    /**
     * attachment namespace
     */
    readonly "namespace": null | string;
  }): Promise<HerokuPlatformAPIAddOnAttachment> {
    return this._client.request("POST", "/addon-attachments", {}, requestBody);
  }

  /**
   * Delete an existing add-on attachment.
   */
  delete(
    addOnAttachmentIdentity: string
  ): Promise<HerokuPlatformAPIAddOnAttachment> {
    return this._client.request(
      "DELETE",
      "/addon-attachments/{(%23%2Fdefinitions%2Fadd-on-attachment%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fadd-on-attachment%2Fdefinitions%2Fidentity)": addOnAttachmentIdentity
      }
    );
  }

  /**
   * Info for existing add-on attachment.
   */
  info(
    addOnAttachmentIdentity: string
  ): Promise<HerokuPlatformAPIAddOnAttachment> {
    return this._client.request(
      "GET",
      "/addon-attachments/{(%23%2Fdefinitions%2Fadd-on-attachment%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fadd-on-attachment%2Fdefinitions%2Fidentity)": addOnAttachmentIdentity
      }
    );
  }

  /**
   * List existing add-on attachments.
   */
  list(): Promise<Array<HerokuPlatformAPIAddOnAttachment>> {
    return this._client.request("GET", "/addon-attachments", {});
  }

  /**
   * List existing add-on attachments for an add-on.
   */
  listbyAddOn(
    addOnIdentity: string
  ): Promise<Array<HerokuPlatformAPIAddOnAttachment>> {
    return this._client.request(
      "GET",
      "/addons/{(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)}/addon-attachments",
      {
        "(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)": addOnIdentity
      }
    );
  }

  /**
   * List existing add-on attachments for an app.
   */
  listbyApp(
    appIdentity: string
  ): Promise<Array<HerokuPlatformAPIAddOnAttachment>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addon-attachments",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Info for existing add-on attachment for an app.
   */
  infobyApp(
    appIdentity: string,
    addOnAttachmentScopedIdentity: string
  ): Promise<HerokuPlatformAPIAddOnAttachment> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addon-attachments/{(%23%2Fdefinitions%2Fadd-on-attachment%2Fdefinitions%2FscopedIdentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fadd-on-attachment%2Fdefinitions%2FscopedIdentity)": addOnAttachmentScopedIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIAddOnConfig {
  /**
   * unique name of the config
   */
  readonly "name": string;

  /**
   * value of the config
   */
  readonly "value": null | string;
}

export class HerokuPlatformAPIAddOnConfigClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Get an add-on's config. Accessible by customers with access and by the add-on partner providing this add-on.
   */
  list(addOnIdentity: string): Promise<Array<HerokuPlatformAPIAddOnConfig>> {
    return this._client.request(
      "GET",
      "/addons/{(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)}/config",
      {
        "(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)": addOnIdentity
      }
    );
  }

  /**
   * Update an add-on's config. Can only be accessed by the add-on partner providing this add-on.
   */
  update(
    addOnIdentity: string,
    requestBody: {
      /**
       * 
       */
      readonly "config": Array<HerokuPlatformAPIAddOnConfig>;
    }
  ): Promise<Array<HerokuPlatformAPIAddOnConfig>> {
    return this._client.request(
      "PATCH",
      "/addons/{(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)}/config",
      {
        "(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)": addOnIdentity
      },
      requestBody
    );
  }
}

export class HerokuPlatformAPIAddOnPlanActionClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }
}

export interface HerokuPlatformAPIAddOnService {
  /**
   * npm package name of the add-on service's Heroku CLI plugin
   */
  readonly "cli_plugin_name": null | string;

  /**
   * when add-on-service was created
   */
  readonly "created_at": string;

  /**
   * human-readable name of the add-on service provider
   */
  readonly "human_name": string;

  /**
   * unique identifier of this add-on-service
   */
  readonly "id": string;

  /**
   * unique name of this add-on-service
   */
  readonly "name": string;

  /**
   * release status for add-on service
   */
  readonly "state": string;

  /**
   * whether or not apps can have access to more than one instance of this add-on at the same time
   */
  readonly "supports_multiple_installations": boolean;

  /**
   * whether or not apps can have access to add-ons billed to a different app
   */
  readonly "supports_sharing": boolean;

  /**
   * when add-on-service was updated
   */
  readonly "updated_at": string;
}

export interface HerokuPlatformAPIRegion {
  /**
   * country where the region exists
   */
  readonly "country": string;

  /**
   * when region was created
   */
  readonly "created_at": string;

  /**
   * description of region
   */
  readonly "description": string;

  /**
   * unique identifier of region
   */
  readonly "id": string;

  /**
   * area in the country where the region exists
   */
  readonly "locale": string;

  /**
   * unique name of region
   */
  readonly "name": string;

  /**
   * whether or not region is available for creating a Private Space
   */
  readonly "private_capable": boolean;

  /**
   * provider of underlying substrate
   */
  readonly "provider": {
    /**
     * name of provider
     */
    readonly "name": string;

    /**
     * region name used by provider
     */
    readonly "region": string;
  };

  /**
   * when region was updated
   */
  readonly "updated_at": string;
}

export interface HerokuPlatformAPIAddOnRegionCapability {
  /**
   * unique identifier of this add-on-region-capability
   */
  readonly "id": string;

  /**
   * whether the add-on can be installed to a Space
   */
  readonly "supports_private_networking": boolean;

  /**
   * Add-on services represent add-ons that may be provisioned for apps. Endpoints under add-on services can be accessed without authentication.
   */
  readonly "addon_service": HerokuPlatformAPIAddOnService;

  /**
   * A region represents a geographic location in which your application may run.
   */
  readonly "region": HerokuPlatformAPIRegion;
}

export class HerokuPlatformAPIAddOnRegionCapabilityClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * List all existing add-on region capabilities.
   */
  list(): Promise<Array<HerokuPlatformAPIAddOnRegionCapability>> {
    return this._client.request("GET", "/addon-region-capabilities", {});
  }

  /**
   * List existing add-on region capabilities for an add-on-service
   */
  listbyAddOnService(
    addOnServiceIdentity: string
  ): Promise<Array<HerokuPlatformAPIAddOnRegionCapability>> {
    return this._client.request(
      "GET",
      "/addon-services/{(%23%2Fdefinitions%2Fadd-on-service%2Fdefinitions%2Fidentity)}/region-capabilities",
      {
        "(%23%2Fdefinitions%2Fadd-on-service%2Fdefinitions%2Fidentity)": addOnServiceIdentity
      }
    );
  }

  /**
   * List existing add-on region capabilities for a region.
   */
  listByRegion(
    regionIdentity: string
  ): Promise<Array<HerokuPlatformAPIAddOnRegionCapability>> {
    return this._client.request(
      "GET",
      "/regions/{(%23%2Fdefinitions%2Fregion%2Fdefinitions%2Fidentity)}/addon-region-capabilities",
      {
        "(%23%2Fdefinitions%2Fregion%2Fdefinitions%2Fidentity)": regionIdentity
      }
    );
  }
}

export class HerokuPlatformAPIAddOnServiceClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing add-on-service.
   */
  info(addOnServiceIdentity: string): Promise<HerokuPlatformAPIAddOnService> {
    return this._client.request(
      "GET",
      "/addon-services/{(%23%2Fdefinitions%2Fadd-on-service%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fadd-on-service%2Fdefinitions%2Fidentity)": addOnServiceIdentity
      }
    );
  }

  /**
   * List existing add-on-services.
   */
  list(): Promise<Array<HerokuPlatformAPIAddOnService>> {
    return this._client.request("GET", "/addon-services", {});
  }
}

export class HerokuPlatformAPIAddOnClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * List all existing add-ons.
   */
  list(): Promise<Array<HerokuPlatformAPIAddOn>> {
    return this._client.request("GET", "/addons", {});
  }

  /**
   * Info for an existing add-on.
   */
  info(addOnIdentity: string): Promise<HerokuPlatformAPIAddOn> {
    return this._client.request(
      "GET",
      "/addons/{(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)": addOnIdentity
      }
    );
  }

  /**
   * Create a new add-on.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * name for add-on's initial attachment
       */
      readonly "attachment": {};

      /**
       * custom add-on provisioning options
       */
      readonly "config": {};

      /**
       * 
       */
      readonly "plan": string;
    }
  ): Promise<HerokuPlatformAPIAddOn> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Delete an existing add-on.
   */
  delete(
    appIdentity: string,
    addOnIdentity: string
  ): Promise<HerokuPlatformAPIAddOn> {
    return this._client.request(
      "DELETE",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons/{(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)": addOnIdentity
      }
    );
  }

  /**
   * Info for an existing add-on.
   */
  infoByApp(
    appIdentity: string,
    addOnIdentity: string
  ): Promise<HerokuPlatformAPIAddOn> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons/{(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)": addOnIdentity
      }
    );
  }

  /**
   * List existing add-ons for an app.
   */
  listByApp(appIdentity: string): Promise<Array<HerokuPlatformAPIAddOn>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Change add-on plan. Some add-ons may not support changing plans. In that case, an error will be returned.
   */
  update(
    appIdentity: string,
    addOnIdentity: string,
    requestBody: {
      /**
       * 
       */
      readonly "plan": string;
    }
  ): Promise<void> {
    return this._client.request(
      "PATCH",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons/{(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)": addOnIdentity
      },
      requestBody
    );
  }

  /**
   * List all existing add-ons a user has access to
   */
  listByUser(accountIdentity: string): Promise<Array<HerokuPlatformAPIAddOn>> {
    return this._client.request(
      "GET",
      "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}/addons",
      {
        "(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)": accountIdentity
      }
    );
  }

  /**
   * List add-ons used across all Team apps
   */
  listByTeam(teamIdentity: string): Promise<Array<HerokuPlatformAPIAddOn>> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/addons",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIAppFeature {
  /**
   * when app feature was created
   */
  readonly "created_at": string;

  /**
   * description of app feature
   */
  readonly "description": string;

  /**
   * documentation URL of app feature
   */
  readonly "doc_url": string;

  /**
   * whether or not app feature has been enabled
   */
  readonly "enabled": boolean;

  /**
   * unique identifier of app feature
   */
  readonly "id": string;

  /**
   * unique name of app feature
   */
  readonly "name": string;

  /**
   * state of app feature
   */
  readonly "state": string;

  /**
   * when app feature was updated
   */
  readonly "updated_at": string;

  /**
   * user readable feature name
   */
  readonly "display_name": string;

  /**
   * e-mail to send feedback about the feature
   */
  readonly "feedback_email": string;
}

export class HerokuPlatformAPIAppFeatureClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for an existing app feature.
   */
  info(
    appIdentity: string,
    appFeatureIdentity: string
  ): Promise<HerokuPlatformAPIAppFeature> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/features/{(%23%2Fdefinitions%2Fapp-feature%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fapp-feature%2Fdefinitions%2Fidentity)": appFeatureIdentity
      }
    );
  }

  /**
   * List existing app features.
   */
  list(appIdentity: string): Promise<Array<HerokuPlatformAPIAppFeature>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/features",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Update an existing app feature.
   */
  update(
    appIdentity: string,
    appFeatureIdentity: string,
    requestBody: {
      /**
       * whether or not app feature has been enabled
       */
      readonly "enabled": boolean;
    }
  ): Promise<HerokuPlatformAPIAppFeature> {
    return this._client.request(
      "PATCH",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/features/{(%23%2Fdefinitions%2Fapp-feature%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fapp-feature%2Fdefinitions%2Fidentity)": appFeatureIdentity
      },
      requestBody
    );
  }
}

export class HerokuPlatformAPIApplicationFormationSetClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }
}

export interface HerokuSetupAPIAppSetup {
  /**
   * unique identifier of app setup
   */
  readonly "id": string;

  /**
   * when app setup was created
   */
  readonly "created_at": string;

  /**
   * when app setup was updated
   */
  readonly "updated_at": string;

  /**
   * the overall status of app setup
   */
  readonly "status": string;

  /**
   * reason that app setup has failed
   */
  readonly "failure_message": null | string;

  /**
   * identity of app
   */
  readonly "app": {
    /**
     * unique identifier of app
     */
    readonly "id": string;

    /**
     * unique name of app
     */
    readonly "name": string;
  };

  /**
   * identity and status of build
   */
  readonly "build": null | {
    /**
     * unique identifier of build
     */
    readonly "id": string;

    /**
     * status of build
     */
    readonly "status": string;

    /**
     * Build process output will be available from this URL as a stream. The stream is available as either `text/plain` or `text/event-stream`. Clients should be prepared to handle disconnects and can resume the stream by sending a `Range` header (for `text/plain`) or a `Last-Event-Id` header (for `text/event-stream`).
     */
    readonly "output_stream_url": string;
  };

  /**
   * errors associated with invalid app.json manifest file
   */
  readonly "manifest_errors": Array<string>;

  /**
   * result of postdeploy script
   */
  readonly "postdeploy": null | {
    /**
     * output of the postdeploy script
     */
    readonly "output": string;

    /**
     * The exit code of the postdeploy script
     */
    readonly "exit_code": number;
  };

  /**
   * fully qualified success url
   */
  readonly "resolved_success_url": null | string;
}

export class HerokuSetupAPIAppSetupClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new app setup from a gzipped tar archive containing an app.json manifest file.
   */
  create(requestBody: {
    /**
     * optional parameters for created app
     */
    readonly "app": {
      /**
       * are other organization members forbidden from joining this app.
       */
      readonly "locked": boolean;

      /**
       * unique name of app
       */
      readonly "name": string;

      /**
       * unique name of organization
       */
      readonly "organization": string;

      /**
       * force creation of the app in the user account even if a default org is set.
       */
      readonly "personal": boolean;

      /**
       * unique name of region
       */
      readonly "region": string;

      /**
       * unique name of space
       */
      readonly "space": string;

      /**
       * unique name of stack
       */
      readonly "stack": string;
    };

    /**
     * gzipped tarball of source code containing app.json manifest file
     */
    readonly "source_blob": {
      /**
       * an optional checksum of the gzipped tarball for verifying its integrity
       */
      readonly "checksum": null | string;

      /**
       * URL of gzipped tarball of source code containing app.json manifest file
       */
      readonly "url": string;

      /**
       * Version of the gzipped tarball.
       */
      readonly "version": null | string;
    };

    /**
     * overrides of keys in the app.json manifest file
     */
    readonly "overrides": {
      /**
       * overrides the buildpacks specified in the app.json manifest file
       */
      readonly "buildpacks": Array<{
        /**
         * location of the buildpack
         */
        readonly "url": string;
      }>;

      /**
       * overrides of the env specified in the app.json manifest file
       */
      readonly "env": {};
    };
  }): Promise<HerokuSetupAPIAppSetup> {
    return this._client.request("POST", "/app-setups", {}, requestBody);
  }

  /**
   * Get the status of an app setup.
   */
  info(appSetupIdentity: string): Promise<HerokuSetupAPIAppSetup> {
    return this._client.request(
      "GET",
      "/app-setups/{(%23%2Fdefinitions%2Fapp-setup%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp-setup%2Fdefinitions%2Fidentity)": appSetupIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIAppTransfer {
  /**
   * app involved in the transfer
   */
  readonly "app": {
    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * when app transfer was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of app transfer
   */
  readonly "id": string;

  /**
   * identity of the owner of the transfer
   */
  readonly "owner": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;
  };

  /**
   * identity of the recipient of the transfer
   */
  readonly "recipient": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;
  };

  /**
   * the current state of an app transfer
   */
  readonly "state": string;

  /**
   * when app transfer was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIAppTransferClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new app transfer.
   */
  create(requestBody: {
    /**
     * 
     */
    readonly "app": string;

    /**
     * 
     */
    readonly "recipient": string;

    /**
     * whether to suppress email notification when transferring apps
     */
    readonly "silent": boolean;
  }): Promise<HerokuPlatformAPIAppTransfer> {
    return this._client.request(
      "POST",
      "/account/app-transfers",
      {},
      requestBody
    );
  }

  /**
   * Delete an existing app transfer
   */
  delete(appTransferIdentity: string): Promise<HerokuPlatformAPIAppTransfer> {
    return this._client.request(
      "DELETE",
      "/account/app-transfers/{(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)": appTransferIdentity
      }
    );
  }

  /**
   * Info for existing app transfer.
   */
  info(appTransferIdentity: string): Promise<HerokuPlatformAPIAppTransfer> {
    return this._client.request(
      "GET",
      "/account/app-transfers/{(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)": appTransferIdentity
      }
    );
  }

  /**
   * List existing apps transfers.
   */
  list(): Promise<Array<HerokuPlatformAPIAppTransfer>> {
    return this._client.request("GET", "/account/app-transfers", {});
  }

  /**
   * Update an existing app transfer.
   */
  update(
    appTransferIdentity: string,
    requestBody: {
      /**
       * the current state of an app transfer
       */
      readonly "state": string;
    }
  ): Promise<HerokuPlatformAPIAppTransfer> {
    return this._client.request(
      "PATCH",
      "/account/app-transfers/{(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)": appTransferIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPIApp {
  /**
   * ACM status of this app
   */
  readonly "acm": boolean;

  /**
   * when app was archived
   */
  readonly "archived_at": null | string;

  /**
   * description from buildpack of app
   */
  readonly "buildpack_provided_description": null | string;

  /**
   * identity of the stack that will be used for new builds
   */
  readonly "build_stack": {
    /**
     * unique identifier of stack
     */
    readonly "id": string;

    /**
     * unique name of stack
     */
    readonly "name": string;
  };

  /**
   * when app was created
   */
  readonly "created_at": string;

  /**
   * git repo URL of app
   */
  readonly "git_url": string;

  /**
   * unique identifier of app
   */
  readonly "id": string;

  /**
   * maintenance status of app
   */
  readonly "maintenance": boolean;

  /**
   * unique name of app
   */
  readonly "name": string;

  /**
   * identity of app owner
   */
  readonly "owner": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;
  };

  /**
   * identity of organization
   */
  readonly "organization": null | {
    /**
     * unique identifier of organization
     */
    readonly "id": string;

    /**
     * unique name of organization
     */
    readonly "name": string;
  };

  /**
   * identity of team
   */
  readonly "team": null | {
    /**
     * unique identifier of team
     */
    readonly "id": string;

    /**
     * unique name of team
     */
    readonly "name": string;
  };

  /**
   * identity of app region
   */
  readonly "region": {
    /**
     * unique identifier of region
     */
    readonly "id": string;

    /**
     * unique name of region
     */
    readonly "name": string;
  };

  /**
   * when app was released
   */
  readonly "released_at": null | string;

  /**
   * git repo size in bytes of app
   */
  readonly "repo_size": null | number;

  /**
   * slug size in bytes of app
   */
  readonly "slug_size": null | number;

  /**
   * identity of space
   */
  readonly "space": null | {
    /**
     * unique identifier of space
     */
    readonly "id": string;

    /**
     * unique name of space
     */
    readonly "name": string;

    /**
     * true if this space has shield enabled
     */
    readonly "shield": boolean;
  };

  /**
   * identity of app stack
   */
  readonly "stack": {
    /**
     * unique identifier of stack
     */
    readonly "id": string;

    /**
     * unique name of stack
     */
    readonly "name": string;
  };

  /**
   * when app was updated
   */
  readonly "updated_at": string;

  /**
   * web URL of app
   */
  readonly "web_url": string;
}

export class HerokuPlatformAPIAppClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new app.
   */
  create(requestBody: {
    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * 
     */
    readonly "region": string;

    /**
     * 
     */
    readonly "stack": string;
  }): Promise<HerokuPlatformAPIApp> {
    return this._client.request("POST", "/apps", {}, requestBody);
  }

  /**
   * Delete an existing app.
   */
  delete(appIdentity: string): Promise<HerokuPlatformAPIApp> {
    return this._client.request(
      "DELETE",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Info for existing app.
   */
  info(appIdentity: string): Promise<HerokuPlatformAPIApp> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * List existing apps.
   */
  list(): Promise<Array<HerokuPlatformAPIApp>> {
    return this._client.request("GET", "/apps", {});
  }

  /**
   * List owned and collaborated apps (excludes team apps).
   */
  listOwnedandCollaborated(
    accountIdentity: string
  ): Promise<Array<HerokuPlatformAPIApp>> {
    return this._client.request(
      "GET",
      "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}/apps",
      {
        "(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)": accountIdentity
      }
    );
  }

  /**
   * Update an existing app.
   */
  update(
    appIdentity: string,
    requestBody: {
      /**
       * 
       */
      readonly "build_stack": string;

      /**
       * maintenance status of app
       */
      readonly "maintenance": boolean;

      /**
       * unique name of app
       */
      readonly "name": string;
    }
  ): Promise<HerokuPlatformAPIApp> {
    return this._client.request(
      "PATCH",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Enable ACM flag for an app
   */
  enableACM(appIdentity: string): Promise<HerokuPlatformAPIApp> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/acm",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Disable ACM flag for an app
   */
  disableACM(appIdentity: string): Promise<HerokuPlatformAPIApp> {
    return this._client.request(
      "DELETE",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/acm",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Refresh ACM for an app
   */
  refreshACM(appIdentity: string): Promise<HerokuPlatformAPIApp> {
    return this._client.request(
      "PATCH",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/acm",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }
}

export interface HerokuBuildAPIBuildResult {
  /**
   * identity of build
   */
  readonly "build": {
    /**
     * unique identifier of build
     */
    readonly "id": string;

    /**
     * status of build
     */
    readonly "status": string;

    /**
     * Build process output will be available from this URL as a stream. The stream is available as either `text/plain` or `text/event-stream`. Clients should be prepared to handle disconnects and can resume the stream by sending a `Range` header (for `text/plain`) or a `Last-Event-Id` header (for `text/event-stream`).
     */
    readonly "output_stream_url": string;
  };

  /**
   * status from the build
   */
  readonly "exit_code": number;

  /**
   * A list of all the lines of a build's output. This has been replaced by the `output_stream_url` attribute on the build resource.
   */
  readonly "lines": Array<{
    /**
     * The output stream where the line was sent.
     */
    readonly "stream": string;

    /**
     * A line of output from the build.
     */
    readonly "line": string;
  }>;
}

export class HerokuBuildAPIBuildResultClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing result.
   */
  info(
    appIdentity: string,
    buildIdentity: string
  ): Promise<HerokuBuildAPIBuildResult> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/builds/{(%23%2Fdefinitions%2Fbuild%2Fdefinitions%2Fidentity)}/result",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fbuild%2Fdefinitions%2Fidentity)": buildIdentity
      }
    );
  }
}

export interface HerokuBuildAPIBuild {
  /**
   * app that the build belongs to
   */
  readonly "app": {
    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * buildpacks executed for this build, in order
   */
  readonly "buildpacks": null | Array<{
    /**
     * location of the buildpack for the app. Either a url (unofficial buildpacks) or an internal urn (heroku official buildpacks).
     */
    readonly "url": string;
  }>;

  /**
   * when build was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of build
   */
  readonly "id": string;

  /**
   * Build process output will be available from this URL as a stream. The stream is available as either `text/plain` or `text/event-stream`. Clients should be prepared to handle disconnects and can resume the stream by sending a `Range` header (for `text/plain`) or a `Last-Event-Id` header (for `text/event-stream`).
   */
  readonly "output_stream_url": string;

  /**
   * location of gzipped tarball of source code used to create build
   */
  readonly "source_blob": {
    /**
     * an optional checksum of the gzipped tarball for verifying its integrity
     */
    readonly "checksum": null | string;

    /**
     * URL where gzipped tar archive of source code for build was downloaded.
     */
    readonly "url": string;

    /**
     * Version of the gzipped tarball.
     */
    readonly "version": null | string;
  };

  /**
   * release resulting from the build
   */
  readonly "release": null | {
    /**
     * unique identifier of release
     */
    readonly "id": string;
  };

  /**
   * slug created by this build
   */
  readonly "slug": null | {
    /**
     * unique identifier of slug
     */
    readonly "id": string;
  };

  /**
   * status of build
   */
  readonly "status": string;

  /**
   * when build was updated
   */
  readonly "updated_at": string;

  /**
   * user that started the build
   */
  readonly "user": {
    /**
     * unique identifier of an account
     */
    readonly "id": string;

    /**
     * unique email address of account
     */
    readonly "email": string;
  };
}

export class HerokuBuildAPIBuildClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new build.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * buildpacks executed for this build, in order
       */
      readonly "buildpacks": null | Array<{
        /**
         * location of the buildpack for the app. Either a url (unofficial buildpacks) or an internal urn (heroku official buildpacks).
         */
        readonly "url": string;
      }>;

      /**
       * location of gzipped tarball of source code used to create build
       */
      readonly "source_blob": {
        /**
         * an optional checksum of the gzipped tarball for verifying its integrity
         */
        readonly "checksum": null | string;

        /**
         * URL where gzipped tar archive of source code for build was downloaded.
         */
        readonly "url": string;

        /**
         * Version of the gzipped tarball.
         */
        readonly "version": null | string;
      };
    }
  ): Promise<HerokuBuildAPIBuild> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/builds",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Info for existing build.
   */
  info(
    appIdentity: string,
    buildIdentity: string
  ): Promise<HerokuBuildAPIBuild> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/builds/{(%23%2Fdefinitions%2Fbuild%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fbuild%2Fdefinitions%2Fidentity)": buildIdentity
      }
    );
  }

  /**
   * List existing build.
   */
  list(appIdentity: string): Promise<Array<HerokuBuildAPIBuild>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/builds",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIBuildpackInstallations {
  /**
   * determines the order in which the buildpacks will execute
   */
  readonly "ordinal": number;

  /**
   * buildpack
   */
  readonly "buildpack": {
    /**
     * location of the buildpack for the app. Either a url (unofficial buildpacks) or an internal urn (heroku official buildpacks).
     */
    readonly "url": string;

    /**
     * either the shorthand name (heroku official buildpacks) or url (unofficial buildpacks) of the buildpack for the app
     */
    readonly "name": string;
  };
}

export class HerokuPlatformAPIBuildpackInstallationsClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Update an app's buildpack installations.
   */
  update(
    appIdentity: string,
    requestBody: {
      /**
       * The buildpack attribute can accept a name, a url, or a urn.
       */
      readonly "updates": Array<{
        /**
         * location of the buildpack for the app. Either a url (unofficial buildpacks) or an internal urn (heroku official buildpacks).
         */
        readonly "buildpack": string;
      }>;
    }
  ): Promise<Array<HerokuPlatformAPIBuildpackInstallations>> {
    return this._client.request(
      "PUT",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/buildpack-installations",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * List an app's existing buildpack installations.
   */
  list(
    appIdentity: string
  ): Promise<Array<HerokuPlatformAPIBuildpackInstallations>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/buildpack-installations",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }
}

export interface HerokuPlatformAPITeamAppPermission {
  /**
   * The name of the app permission.
   */
  readonly "name": string;

  /**
   * A description of what the app permission allows.
   */
  readonly "description": string;
}

export interface HerokuPlatformAPICollaborator {
  /**
   * app collaborator belongs to
   */
  readonly "app": {
    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * when collaborator was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of collaborator
   */
  readonly "id": string;

  /**
   * 
   */
  readonly "permissions": Array<HerokuPlatformAPITeamAppPermission>;

  /**
   * role in the team
   */
  readonly "role": null | string;

  /**
   * when collaborator was updated
   */
  readonly "updated_at": string;

  /**
   * identity of collaborated account
   */
  readonly "user": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * whether the user is federated and belongs to an Identity Provider
     */
    readonly "federated": boolean;

    /**
     * unique identifier of an account
     */
    readonly "id": string;
  };
}

export class HerokuPlatformAPICollaboratorClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new collaborator.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * whether to suppress email invitation when creating collaborator
       */
      readonly "silent": boolean;

      /**
       * 
       */
      readonly "user": string;
    }
  ): Promise<HerokuPlatformAPICollaborator> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Delete an existing collaborator.
   */
  delete(
    appIdentity: string,
    collaboratorIdentity: string
  ): Promise<HerokuPlatformAPICollaborator> {
    return this._client.request(
      "DELETE",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Fcollaborator%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fcollaborator%2Fdefinitions%2Fidentity)": collaboratorIdentity
      }
    );
  }

  /**
   * Info for existing collaborator.
   */
  info(
    appIdentity: string,
    collaboratorIdentity: string
  ): Promise<HerokuPlatformAPICollaborator> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Fcollaborator%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fcollaborator%2Fdefinitions%2Fidentity)": collaboratorIdentity
      }
    );
  }

  /**
   * List existing collaborators.
   */
  list(appIdentity: string): Promise<Array<HerokuPlatformAPICollaborator>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }
}

export class HerokuPlatformAPIConfigVarsClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Get config-vars for app.
   */
  infoforApp(appIdentity: string): Promise<{}> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/config-vars",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Get config-vars for a release.
   */
  infoforAppRelease(
    appIdentity: string,
    releaseIdentity: number | string
  ): Promise<{}> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases/{(%23%2Fdefinitions%2Frelease%2Fdefinitions%2Fidentity)}/config-vars",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Frelease%2Fdefinitions%2Fidentity)": releaseIdentity
      }
    );
  }

  /**
   * Update config-vars for app. You can update existing config-vars by setting them again, and remove by setting it to `null`.
   */
  update(appIdentity: string, requestBody: {}): Promise<{}> {
    return this._client.request(
      "PATCH",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/config-vars",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPICredit {
  /**
   * total value of credit in cents
   */
  readonly "amount": number;

  /**
   * remaining value of credit in cents
   */
  readonly "balance": number;

  /**
   * when credit was created
   */
  readonly "created_at": string;

  /**
   * when credit will expire
   */
  readonly "expires_at": string;

  /**
   * unique identifier of credit
   */
  readonly "id": string;

  /**
   * a name for credit
   */
  readonly "title": string;

  /**
   * when credit was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPICreditClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new credit.
   */
  create(requestBody: {
    /**
     * first code from a discount card
     */
    readonly "code1": string;

    /**
     * second code from a discount card
     */
    readonly "code2": string;
  }): Promise<HerokuPlatformAPICredit> {
    return this._client.request("POST", "/account/credits", {}, requestBody);
  }

  /**
   * Info for existing credit.
   */
  info(creditIdentity: string): Promise<HerokuPlatformAPICredit> {
    return this._client.request(
      "GET",
      "/account/credits/{(%23%2Fdefinitions%2Fcredit%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fcredit%2Fdefinitions%2Fidentity)": creditIdentity
      }
    );
  }

  /**
   * List existing credits.
   */
  list(): Promise<Array<HerokuPlatformAPICredit>> {
    return this._client.request("GET", "/account/credits", {});
  }
}

export interface HerokuPlatformAPIDomain {
  /**
   * status of this record's ACM
   */
  readonly "acm_status": null | string;

  /**
   * app that owns the domain
   */
  readonly "app": {
    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * canonical name record, the address to point a domain at
   */
  readonly "cname": null | string;

  /**
   * when domain was created
   */
  readonly "created_at": string;

  /**
   * full hostname
   */
  readonly "hostname": string;

  /**
   * unique identifier of this domain
   */
  readonly "id": string;

  /**
   * type of domain name
   */
  readonly "kind": string;

  /**
   * when domain was updated
   */
  readonly "updated_at": string;

  /**
   * status of this record's cname
   */
  readonly "status": string;
}

export class HerokuPlatformAPIDomainClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new domain.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * full hostname
       */
      readonly "hostname": string;
    }
  ): Promise<HerokuPlatformAPIDomain> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Delete an existing domain
   */
  delete(
    appIdentity: string,
    domainIdentity: string
  ): Promise<HerokuPlatformAPIDomain> {
    return this._client.request(
      "DELETE",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains/{(%23%2Fdefinitions%2Fdomain%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fdomain%2Fdefinitions%2Fidentity)": domainIdentity
      }
    );
  }

  /**
   * Info for existing domain.
   */
  info(
    appIdentity: string,
    domainIdentity: string
  ): Promise<HerokuPlatformAPIDomain> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains/{(%23%2Fdefinitions%2Fdomain%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fdomain%2Fdefinitions%2Fidentity)": domainIdentity
      }
    );
  }

  /**
   * List existing domains.
   */
  list(appIdentity: string): Promise<Array<HerokuPlatformAPIDomain>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIDynoSize {
  /**
   * minimum vCPUs, non-dedicated may get more depending on load
   */
  readonly "compute": number;

  /**
   * price information for this dyno size
   */
  readonly "cost": null | {};

  /**
   * whether this dyno will be dedicated to one user
   */
  readonly "dedicated": boolean;

  /**
   * unit of consumption for Heroku Enterprise customers
   */
  readonly "dyno_units": number;

  /**
   * unique identifier of this dyno size
   */
  readonly "id": string;

  /**
   * amount of RAM in GB
   */
  readonly "memory": number;

  /**
   * the name of this dyno-size
   */
  readonly "name": string;

  /**
   * whether this dyno can only be provisioned in a private space
   */
  readonly "private_space_only": boolean;
}

export class HerokuPlatformAPIDynoSizeClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing dyno size.
   */
  info(dynoSizeIdentity: string): Promise<HerokuPlatformAPIDynoSize> {
    return this._client.request(
      "GET",
      "/dyno-sizes/{(%23%2Fdefinitions%2Fdyno-size%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fdyno-size%2Fdefinitions%2Fidentity)": dynoSizeIdentity
      }
    );
  }

  /**
   * List existing dyno sizes.
   */
  list(): Promise<Array<HerokuPlatformAPIDynoSize>> {
    return this._client.request("GET", "/dyno-sizes", {});
  }
}

export interface HerokuPlatformAPIDyno {
  /**
   * a URL to stream output from for attached processes or null for non-attached processes
   */
  readonly "attach_url": null | string;

  /**
   * command used to start this process
   */
  readonly "command": string;

  /**
   * when dyno was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of this dyno
   */
  readonly "id": string;

  /**
   * the name of this process on this dyno
   */
  readonly "name": string;

  /**
   * app release of the dyno
   */
  readonly "release": {
    /**
     * unique identifier of release
     */
    readonly "id": string;

    /**
     * unique version assigned to the release
     */
    readonly "version": number;
  };

  /**
   * app formation belongs to
   */
  readonly "app": {
    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * dyno size (default: "standard-1X")
   */
  readonly "size": string;

  /**
   * current status of process (either: crashed, down, idle, starting, or up)
   */
  readonly "state": string;

  /**
   * type of process
   */
  readonly "type": string;

  /**
   * when process last changed state
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIDynoClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new dyno.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * whether to stream output or not
       */
      readonly "attach": boolean;

      /**
       * command used to start this process
       */
      readonly "command": string;

      /**
       * custom environment to add to the dyno config vars
       */
      readonly "env": {};

      /**
       * force an attached one-off dyno to not run in a tty
       */
      readonly "force_no_tty": null | boolean;

      /**
       * dyno size (default: "standard-1X")
       */
      readonly "size": string;

      /**
       * type of process
       */
      readonly "type": string;

      /**
       * seconds until dyno expires, after which it will soon be killed
       */
      readonly "time_to_live": number;
    }
  ): Promise<HerokuPlatformAPIDyno> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Restart dyno.
   */
  restart(appIdentity: string, dynoIdentity: string): Promise<{}> {
    return this._client.request(
      "DELETE",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos/{(%23%2Fdefinitions%2Fdyno%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fdyno%2Fdefinitions%2Fidentity)": dynoIdentity
      }
    );
  }

  /**
   * Restart all dynos.
   */
  restartall(appIdentity: string): Promise<{}> {
    return this._client.request(
      "DELETE",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Stop dyno.
   */
  stop(appIdentity: string, dynoIdentity: string): Promise<{}> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos/{(%23%2Fdefinitions%2Fdyno%2Fdefinitions%2Fidentity)}/actions/stop",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fdyno%2Fdefinitions%2Fidentity)": dynoIdentity
      }
    );
  }

  /**
   * Info for existing dyno.
   */
  info(
    appIdentity: string,
    dynoIdentity: string
  ): Promise<HerokuPlatformAPIDyno> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos/{(%23%2Fdefinitions%2Fdyno%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fdyno%2Fdefinitions%2Fidentity)": dynoIdentity
      }
    );
  }

  /**
   * List existing dynos.
   */
  list(appIdentity: string): Promise<Array<HerokuPlatformAPIDyno>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }
}

export class HerokuPlatformAPIEventClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }
}

export class HerokuPlatformAPIFailedEventClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }
}

export interface HerokuPlatformAPITeamApp {
  /**
   * when app was archived
   */
  readonly "archived_at": null | string;

  /**
   * description from buildpack of app
   */
  readonly "buildpack_provided_description": null | string;

  /**
   * when app was created
   */
  readonly "created_at": string;

  /**
   * git repo URL of app
   */
  readonly "git_url": string;

  /**
   * unique identifier of app
   */
  readonly "id": string;

  /**
   * is the current member a collaborator on this app.
   */
  readonly "joined": boolean;

  /**
   * are other team members forbidden from joining this app.
   */
  readonly "locked": boolean;

  /**
   * maintenance status of app
   */
  readonly "maintenance": boolean;

  /**
   * unique name of app
   */
  readonly "name": string;

  /**
   * team that owns this app
   */
  readonly "team": null | {
    /**
     * unique name of team
     */
    readonly "name": string;
  };

  /**
   * identity of app owner
   */
  readonly "owner": null | {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;
  };

  /**
   * identity of app region
   */
  readonly "region": {
    /**
     * unique identifier of region
     */
    readonly "id": string;

    /**
     * unique name of region
     */
    readonly "name": string;
  };

  /**
   * when app was released
   */
  readonly "released_at": null | string;

  /**
   * git repo size in bytes of app
   */
  readonly "repo_size": null | number;

  /**
   * slug size in bytes of app
   */
  readonly "slug_size": null | number;

  /**
   * identity of space
   */
  readonly "space": null | {
    /**
     * unique identifier of space
     */
    readonly "id": string;

    /**
     * unique name of space
     */
    readonly "name": string;
  };

  /**
   * identity of app stack
   */
  readonly "stack": {
    /**
     * unique identifier of stack
     */
    readonly "id": string;

    /**
     * unique name of stack
     */
    readonly "name": string;
  };

  /**
   * when app was updated
   */
  readonly "updated_at": string;

  /**
   * web URL of app
   */
  readonly "web_url": string;
}

export class HerokuPlatformAPIFiltersClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Request an apps list filtered by app id.
   */
  apps(requestBody: {
    /**
     * 
     */
    readonly "in": {
      /**
       * 
       */
      readonly "id": Array<string>;
    };
  }): Promise<Array<HerokuPlatformAPITeamApp>> {
    return this._client.request("POST", "/filters/apps", {}, requestBody);
  }
}

export interface HerokuPlatformAPIFormation {
  /**
   * app formation belongs to
   */
  readonly "app": {
    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * command to use to launch this process
   */
  readonly "command": string;

  /**
   * when process type was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of this process type
   */
  readonly "id": string;

  /**
   * number of processes to maintain
   */
  readonly "quantity": number;

  /**
   * dyno size (default: "standard-1X")
   */
  readonly "size": string;

  /**
   * type of process to maintain
   */
  readonly "type": string;

  /**
   * when dyno type was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIFormationClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for a process type
   */
  info(
    appIdentity: string,
    formationIdentity: string
  ): Promise<HerokuPlatformAPIFormation> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation/{(%23%2Fdefinitions%2Fformation%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fformation%2Fdefinitions%2Fidentity)": formationIdentity
      }
    );
  }

  /**
   * List process type formation
   */
  list(appIdentity: string): Promise<Array<HerokuPlatformAPIFormation>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Batch update process types
   */
  batchUpdate(
    appIdentity: string,
    requestBody: {
      /**
       * Array with formation updates. Each element must have "type", the id or name of the process type to be updated, and can optionally update its "quantity" or "size".
       */
      readonly "updates": Array<{
        /**
         * number of processes to maintain
         */
        readonly "quantity": number;

        /**
         * dyno size (default: "standard-1X")
         */
        readonly "size": string;

        /**
         * type of process to maintain
         */
        readonly "type": string;
      }>;
    }
  ): Promise<Array<HerokuPlatformAPIFormation>> {
    return this._client.request(
      "PATCH",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Update process type
   */
  update(
    appIdentity: string,
    formationIdentity: string,
    requestBody: {
      /**
       * number of processes to maintain
       */
      readonly "quantity": number;

      /**
       * dyno size (default: "standard-1X")
       */
      readonly "size": string;
    }
  ): Promise<HerokuPlatformAPIFormation> {
    return this._client.request(
      "PATCH",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation/{(%23%2Fdefinitions%2Fformation%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fformation%2Fdefinitions%2Fidentity)": formationIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPIIdentityProvider {
  /**
   * raw contents of the public certificate (eg: .crt or .pem file)
   */
  readonly "certificate": string;

  /**
   * when provider record was created
   */
  readonly "created_at": string;

  /**
   * URL identifier provided by the identity provider
   */
  readonly "entity_id": string;

  /**
   * unique identifier of this identity provider
   */
  readonly "id": string;

  /**
   * single log out URL for this identity provider
   */
  readonly "slo_target_url": string;

  /**
   * single sign on URL for this identity provider
   */
  readonly "sso_target_url": string;

  /**
   * organization associated with this identity provider
   */
  readonly "organization": null | {
    /**
     * unique name of organization
     */
    readonly "name": string;
  };

  /**
   * when the identity provider record was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIIdentityProviderClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Get a list of an organization's Identity Providers
   */
  listByOrganization(
    organizationName: string
  ): Promise<Array<HerokuPlatformAPIIdentityProvider>> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fname)}/identity-providers",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fname)": organizationName
      }
    );
  }

  /**
   * Create an Identity Provider for an organization
   */
  createByOrganization(
    organizationName: string,
    requestBody: {
      /**
       * raw contents of the public certificate (eg: .crt or .pem file)
       */
      readonly "certificate": string;

      /**
       * URL identifier provided by the identity provider
       */
      readonly "entity_id": string;

      /**
       * single log out URL for this identity provider
       */
      readonly "slo_target_url": string;

      /**
       * single sign on URL for this identity provider
       */
      readonly "sso_target_url": string;
    }
  ): Promise<HerokuPlatformAPIIdentityProvider> {
    return this._client.request(
      "POST",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fname)}/identity-providers",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fname)": organizationName
      },
      requestBody
    );
  }

  /**
   * Update an organization's Identity Provider
   */
  updateByOrganization(
    organizationName: string,
    identityProviderId: string,
    requestBody: {
      /**
       * raw contents of the public certificate (eg: .crt or .pem file)
       */
      readonly "certificate": string;

      /**
       * URL identifier provided by the identity provider
       */
      readonly "entity_id": string;

      /**
       * single log out URL for this identity provider
       */
      readonly "slo_target_url": string;

      /**
       * single sign on URL for this identity provider
       */
      readonly "sso_target_url": string;
    }
  ): Promise<HerokuPlatformAPIIdentityProvider> {
    return this._client.request(
      "PATCH",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fname)}/identity-providers/{(%23%2Fdefinitions%2Fidentity-provider%2Fdefinitions%2Fid)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fname)": organizationName,
        "(%23%2Fdefinitions%2Fidentity-provider%2Fdefinitions%2Fid)": identityProviderId
      },
      requestBody
    );
  }

  /**
   * Delete an organization's Identity Provider
   */
  deleteByOrganization(
    organizationName: string,
    identityProviderId: string
  ): Promise<HerokuPlatformAPIIdentityProvider> {
    return this._client.request(
      "DELETE",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fname)}/identity-providers/{(%23%2Fdefinitions%2Fidentity-provider%2Fdefinitions%2Fid)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fname)": organizationName,
        "(%23%2Fdefinitions%2Fidentity-provider%2Fdefinitions%2Fid)": identityProviderId
      }
    );
  }

  /**
   * Get a list of a team's Identity Providers
   */
  listByTeam(
    teamIdentity: string
  ): Promise<Array<HerokuPlatformAPIIdentityProvider>> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/identity-providers",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      }
    );
  }

  /**
   * Create an Identity Provider for a team
   */
  createByTeam(
    teamIdentity: string,
    requestBody: {
      /**
       * raw contents of the public certificate (eg: .crt or .pem file)
       */
      readonly "certificate": string;

      /**
       * URL identifier provided by the identity provider
       */
      readonly "entity_id": string;

      /**
       * single log out URL for this identity provider
       */
      readonly "slo_target_url": string;

      /**
       * single sign on URL for this identity provider
       */
      readonly "sso_target_url": string;
    }
  ): Promise<HerokuPlatformAPIIdentityProvider> {
    return this._client.request(
      "POST",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/identity-providers",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      },
      requestBody
    );
  }

  /**
   * Update a team's Identity Provider
   */
  updateByTeam(
    teamIdentity: string,
    identityProviderId: string,
    requestBody: {
      /**
       * raw contents of the public certificate (eg: .crt or .pem file)
       */
      readonly "certificate": string;

      /**
       * URL identifier provided by the identity provider
       */
      readonly "entity_id": string;

      /**
       * single log out URL for this identity provider
       */
      readonly "slo_target_url": string;

      /**
       * single sign on URL for this identity provider
       */
      readonly "sso_target_url": string;
    }
  ): Promise<HerokuPlatformAPIIdentityProvider> {
    return this._client.request(
      "PATCH",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/identity-providers/{(%23%2Fdefinitions%2Fidentity-provider%2Fdefinitions%2Fid)}",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity,
        "(%23%2Fdefinitions%2Fidentity-provider%2Fdefinitions%2Fid)": identityProviderId
      },
      requestBody
    );
  }

  /**
   * Delete a team's Identity Provider
   */
  deleteByTeam(
    teamName: string,
    identityProviderId: string
  ): Promise<HerokuPlatformAPIIdentityProvider> {
    return this._client.request(
      "DELETE",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fname)}/identity-providers/{(%23%2Fdefinitions%2Fidentity-provider%2Fdefinitions%2Fid)}",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fname)": teamName,
        "(%23%2Fdefinitions%2Fidentity-provider%2Fdefinitions%2Fid)": identityProviderId
      }
    );
  }
}

export interface HerokuPlatformAPIInboundRuleset {
  /**
   * unique identifier of an inbound-ruleset
   */
  readonly "id": string;

  /**
   * when inbound-ruleset was created
   */
  readonly "created_at": string;

  /**
   * 
   */
  readonly "rules": Array<{
    /**
     * states whether the connection is allowed or denied
     */
    readonly "action": string;

    /**
     * is the request’s source in CIDR notation
     */
    readonly "source": string;
  }>;

  /**
   * unique email address of account
   */
  readonly "created_by": string;
}

export class HerokuPlatformAPIInboundRulesetClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Current inbound ruleset for a space
   */
  current(spaceIdentity: string): Promise<HerokuPlatformAPIInboundRuleset> {
    return this._client.request(
      "GET",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/inbound-ruleset",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      }
    );
  }

  /**
   * Info on an existing Inbound Ruleset
   */
  info(
    spaceIdentity: string,
    inboundRulesetIdentity: string
  ): Promise<HerokuPlatformAPIInboundRuleset> {
    return this._client.request(
      "GET",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/inbound-rulesets/{(%23%2Fdefinitions%2Finbound-ruleset%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity,
        "(%23%2Fdefinitions%2Finbound-ruleset%2Fdefinitions%2Fidentity)": inboundRulesetIdentity
      }
    );
  }

  /**
   * List all inbound rulesets for a space
   */
  list(spaceIdentity: string): Promise<Array<HerokuPlatformAPIInboundRuleset>> {
    return this._client.request(
      "GET",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/inbound-rulesets",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      }
    );
  }

  /**
   * Create a new inbound ruleset
   */
  create(
    spaceIdentity: string,
    requestBody: {
      /**
       * 
       */
      readonly "rules": Array<{
        /**
         * states whether the connection is allowed or denied
         */
        readonly "action": string;

        /**
         * is the request’s source in CIDR notation
         */
        readonly "source": string;
      }>;
    }
  ): Promise<void> {
    return this._client.request(
      "PUT",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/inbound-ruleset",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      },
      requestBody
    );
  }
}

export class HerokuPlatformAPIInvitationClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for invitation.
   */
  info(invitationIdentity: string): Promise<void> {
    return this._client.request(
      "GET",
      "/invitations/{(%23%2Fdefinitions%2Finvitation%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Finvitation%2Fdefinitions%2Fidentity)": invitationIdentity
      }
    );
  }

  /**
   * Invite a user.
   */
  create(requestBody: {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * full name of the account owner
     */
    readonly "name": null | string;
  }): Promise<void> {
    return this._client.request("POST", "/invitations", {}, requestBody);
  }

  /**
   * Send a verification code for an invitation via SMS/phone call.
   */
  sendVerificationCode(
    invitationIdentity: string,
    requestBody: {
      /**
       * Phone number to send verification code
       */
      readonly "phone_number": string;

      /**
       * Transport used to send verification code
       */
      readonly "method": string;
    }
  ): Promise<void> {
    return this._client.request(
      "POST",
      "/invitations/{(%23%2Fdefinitions%2Finvitation%2Fdefinitions%2Fidentity)}/actions/send-verification",
      {
        "(%23%2Fdefinitions%2Finvitation%2Fdefinitions%2Fidentity)": invitationIdentity
      },
      requestBody
    );
  }

  /**
   * Verify an invitation using a verification code.
   */
  verify(
    invitationIdentity: string,
    requestBody: {
      /**
       * Value used to verify invitation
       */
      readonly "verification_code": string;
    }
  ): Promise<void> {
    return this._client.request(
      "POST",
      "/invitations/{(%23%2Fdefinitions%2Finvitation%2Fdefinitions%2Fidentity)}/actions/verify",
      {
        "(%23%2Fdefinitions%2Finvitation%2Fdefinitions%2Fidentity)": invitationIdentity
      },
      requestBody
    );
  }

  /**
   * Finalize Invitation and Create Account.
   */
  finalize(
    invitationIdentity: string,
    requestBody: {
      /**
       * current password on the account
       */
      readonly "password": string;

      /**
       * current password on the account
       */
      readonly "password_confirmation": string;

      /**
       * whether this user should receive a newsletter or not
       */
      readonly "receive_newsletter": boolean;
    }
  ): Promise<void> {
    return this._client.request(
      "PATCH",
      "/invitations/{(%23%2Fdefinitions%2Finvitation%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Finvitation%2Fdefinitions%2Fidentity)": invitationIdentity
      },
      requestBody
    );
  }
}

export class HerokuVaultAPIInvoiceAddressClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Retrieve existing invoice address.
   */
  info(): Promise<void> {
    return this._client.request("GET", "/account/invoice-address", {});
  }

  /**
   * Update invoice address for an account.
   */
  update(requestBody: {
    /**
     * invoice street address line 1
     */
    readonly "address_1": string;

    /**
     * invoice street address line 2
     */
    readonly "address_2": string;

    /**
     * invoice city
     */
    readonly "city": string;

    /**
     * country
     */
    readonly "country": string;

    /**
     * metadata / additional information to go on invoice
     */
    readonly "other": string;

    /**
     * invoice zip code
     */
    readonly "postal_code": string;

    /**
     * invoice state
     */
    readonly "state": string;

    /**
     * flag to use the invoice address for an account or not
     */
    readonly "use_invoice_address": boolean;
  }): Promise<void> {
    return this._client.request(
      "PUT",
      "/account/invoice-address",
      {},
      requestBody
    );
  }
}

export interface HerokuPlatformAPIInvoice {
  /**
   * total charges on this invoice
   */
  readonly "charges_total": number;

  /**
   * when invoice was created
   */
  readonly "created_at": string;

  /**
   * total credits on this invoice
   */
  readonly "credits_total": number;

  /**
   * unique identifier of this invoice
   */
  readonly "id": string;

  /**
   * human readable invoice number
   */
  readonly "number": number;

  /**
   * the ending date that the invoice covers
   */
  readonly "period_end": string;

  /**
   * the starting date that this invoice covers
   */
  readonly "period_start": string;

  /**
   * payment status for this invoice (pending, successful, failed)
   */
  readonly "state": number;

  /**
   * combined total of charges and credits on this invoice
   */
  readonly "total": number;

  /**
   * when invoice was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIInvoiceClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing invoice.
   */
  info(invoiceIdentity: number): Promise<HerokuPlatformAPIInvoice> {
    return this._client.request(
      "GET",
      "/account/invoices/{(%23%2Fdefinitions%2Finvoice%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Finvoice%2Fdefinitions%2Fidentity)": invoiceIdentity
      }
    );
  }

  /**
   * List existing invoices.
   */
  list(): Promise<Array<HerokuPlatformAPIInvoice>> {
    return this._client.request("GET", "/account/invoices", {});
  }
}

export interface HerokuPlatformAPIKey {
  /**
   * comment on the key
   */
  readonly "comment": string;

  /**
   * when key was created
   */
  readonly "created_at": string;

  /**
   * deprecated. Please refer to 'comment' instead
   */
  readonly "email": string;

  /**
   * a unique identifying string based on contents
   */
  readonly "fingerprint": string;

  /**
   * unique identifier of this key
   */
  readonly "id": string;

  /**
   * full public_key as uploaded
   */
  readonly "public_key": string;

  /**
   * when key was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIKeyClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing key.
   */
  info(keyIdentity: string): Promise<HerokuPlatformAPIKey> {
    return this._client.request(
      "GET",
      "/account/keys/{(%23%2Fdefinitions%2Fkey%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fkey%2Fdefinitions%2Fidentity)": keyIdentity
      }
    );
  }

  /**
   * List existing keys.
   */
  list(): Promise<Array<HerokuPlatformAPIKey>> {
    return this._client.request("GET", "/account/keys", {});
  }
}

export interface HerokuPlatformAPILogDrain {
  /**
   * add-on that created the drain
   */
  readonly "addon": null | {
    /**
     * unique identifier of add-on
     */
    readonly "id": string;

    /**
     * globally unique name of the add-on
     */
    readonly "name": string;
  };

  /**
   * when log drain was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of this log drain
   */
  readonly "id": string;

  /**
   * token associated with the log drain
   */
  readonly "token": string;

  /**
   * when log drain was updated
   */
  readonly "updated_at": string;

  /**
   * url associated with the log drain
   */
  readonly "url": string;
}

export class HerokuPlatformAPILogDrainClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new log drain.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * url associated with the log drain
       */
      readonly "url": string;
    }
  ): Promise<HerokuPlatformAPILogDrain> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Delete an existing log drain. Log drains added by add-ons can only be removed by removing the add-on.
   */
  delete(
    appIdentity: string,
    logDrainQueryidentity: string
  ): Promise<HerokuPlatformAPILogDrain> {
    return this._client.request(
      "DELETE",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains/{(%23%2Fdefinitions%2Flog-drain%2Fdefinitions%2Fquery_identity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Flog-drain%2Fdefinitions%2Fquery_identity)": logDrainQueryidentity
      }
    );
  }

  /**
   * Info for existing log drain.
   */
  info(
    appIdentity: string,
    logDrainQueryidentity: string
  ): Promise<HerokuPlatformAPILogDrain> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains/{(%23%2Fdefinitions%2Flog-drain%2Fdefinitions%2Fquery_identity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Flog-drain%2Fdefinitions%2Fquery_identity)": logDrainQueryidentity
      }
    );
  }

  /**
   * List existing log drains for an add-on.
   */
  listForAddOn(
    addOnIdentity: string
  ): Promise<Array<HerokuPlatformAPILogDrain>> {
    return this._client.request(
      "GET",
      "/addons/{(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)}/log-drains",
      {
        "(%23%2Fdefinitions%2Fadd-on%2Fdefinitions%2Fidentity)": addOnIdentity
      }
    );
  }

  /**
   * List existing log drains.
   */
  list(appIdentity: string): Promise<Array<HerokuPlatformAPILogDrain>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }
}

export interface HerokuPlatformAPILogSession {
  /**
   * when log connection was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of this log session
   */
  readonly "id": string;

  /**
   * URL for log streaming session
   */
  readonly "logplex_url": string;

  /**
   * when log session was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPILogSessionClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new log session.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * dyno to limit results to
       */
      readonly "dyno": string;

      /**
       * number of log lines to stream at once
       */
      readonly "lines": number;

      /**
       * log source to limit results to
       */
      readonly "source": string;

      /**
       * whether to stream ongoing logs
       */
      readonly "tail": boolean;
    }
  ): Promise<HerokuPlatformAPILogSession> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-sessions",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPIOAuthAuthorization {
  /**
   * access token for this authorization
   */
  readonly "access_token": null | {
    /**
     * seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime
     */
    readonly "expires_in": null | number;

    /**
     * unique identifier of OAuth token
     */
    readonly "id": string;

    /**
     * contents of the token to be used for authorization
     */
    readonly "token": string;
  };

  /**
   * identifier of the client that obtained this authorization, if any
   */
  readonly "client": null | {
    /**
     * unique identifier of this OAuth client
     */
    readonly "id": string;

    /**
     * OAuth client name
     */
    readonly "name": string;

    /**
     * endpoint for redirection after authorization with OAuth client
     */
    readonly "redirect_uri": string;
  };

  /**
   * when OAuth authorization was created
   */
  readonly "created_at": string;

  /**
   * this authorization's grant
   */
  readonly "grant": null | {
    /**
     * grant code received from OAuth web application authorization
     */
    readonly "code": string;

    /**
     * seconds until OAuth grant expires
     */
    readonly "expires_in": number;

    /**
     * unique identifier of OAuth grant
     */
    readonly "id": string;
  };

  /**
   * unique identifier of OAuth authorization
   */
  readonly "id": string;

  /**
   * refresh token for this authorization
   */
  readonly "refresh_token": null | {
    /**
     * seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime
     */
    readonly "expires_in": null | number;

    /**
     * unique identifier of OAuth token
     */
    readonly "id": string;

    /**
     * contents of the token to be used for authorization
     */
    readonly "token": string;
  };

  /**
   * The scope of access OAuth authorization allows
   */
  readonly "scope": Array<string>;

  /**
   * when OAuth authorization was updated
   */
  readonly "updated_at": string;

  /**
   * authenticated user associated with this authorization
   */
  readonly "user": {
    /**
     * unique identifier of an account
     */
    readonly "id": string;

    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * full name of the account owner
     */
    readonly "full_name": null | string;
  };
}

export class HerokuPlatformAPIOAuthAuthorizationClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new OAuth authorization.
   */
  create(requestBody: {
    /**
     * 
     */
    readonly "client": string;

    /**
     * human-friendly description of this OAuth authorization
     */
    readonly "description": string;

    /**
     * seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime
     */
    readonly "expires_in": null | number;

    /**
     * The scope of access OAuth authorization allows
     */
    readonly "scope": Array<string>;
  }): Promise<HerokuPlatformAPIOAuthAuthorization> {
    return this._client.request(
      "POST",
      "/oauth/authorizations",
      {},
      requestBody
    );
  }

  /**
   * Delete OAuth authorization.
   */
  delete(
    oauthAuthorizationIdentity: string
  ): Promise<HerokuPlatformAPIOAuthAuthorization> {
    return this._client.request(
      "DELETE",
      "/oauth/authorizations/{(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)": oauthAuthorizationIdentity
      }
    );
  }

  /**
   * Info for an OAuth authorization.
   */
  info(
    oauthAuthorizationIdentity: string
  ): Promise<HerokuPlatformAPIOAuthAuthorization> {
    return this._client.request(
      "GET",
      "/oauth/authorizations/{(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)": oauthAuthorizationIdentity
      }
    );
  }

  /**
   * List OAuth authorizations.
   */
  list(): Promise<Array<HerokuPlatformAPIOAuthAuthorization>> {
    return this._client.request("GET", "/oauth/authorizations", {});
  }

  /**
   * Regenerate OAuth tokens. This endpoint is only available to direct authorizations or privileged OAuth clients.
   */
  regenerate(
    oauthAuthorizationIdentity: string
  ): Promise<HerokuPlatformAPIOAuthAuthorization> {
    return this._client.request(
      "POST",
      "/oauth/authorizations/{(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)}/actions/regenerate-tokens",
      {
        "(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)": oauthAuthorizationIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIOAuthClient {
  /**
   * when OAuth client was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of this OAuth client
   */
  readonly "id": string;

  /**
   * whether the client is still operable given a delinquent account
   */
  readonly "ignores_delinquent": null | boolean;

  /**
   * OAuth client name
   */
  readonly "name": string;

  /**
   * endpoint for redirection after authorization with OAuth client
   */
  readonly "redirect_uri": string;

  /**
   * secret used to obtain OAuth authorizations under this client
   */
  readonly "secret": string;

  /**
   * when OAuth client was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIOAuthClientClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new OAuth client.
   */
  create(requestBody: {
    /**
     * OAuth client name
     */
    readonly "name": string;

    /**
     * endpoint for redirection after authorization with OAuth client
     */
    readonly "redirect_uri": string;
  }): Promise<HerokuPlatformAPIOAuthClient> {
    return this._client.request("POST", "/oauth/clients", {}, requestBody);
  }

  /**
   * Delete OAuth client.
   */
  delete(oauthClientIdentity: string): Promise<HerokuPlatformAPIOAuthClient> {
    return this._client.request(
      "DELETE",
      "/oauth/clients/{(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)": oauthClientIdentity
      }
    );
  }

  /**
   * Info for an OAuth client
   */
  info(oauthClientIdentity: string): Promise<void> {
    return this._client.request(
      "GET",
      "/oauth/clients/{(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)": oauthClientIdentity
      }
    );
  }

  /**
   * List OAuth clients
   */
  list(): Promise<Array<HerokuPlatformAPIOAuthClient>> {
    return this._client.request("GET", "/oauth/clients", {});
  }

  /**
   * Update OAuth client
   */
  update(
    oauthClientIdentity: string,
    requestBody: {
      /**
       * OAuth client name
       */
      readonly "name": string;

      /**
       * endpoint for redirection after authorization with OAuth client
       */
      readonly "redirect_uri": string;
    }
  ): Promise<HerokuPlatformAPIOAuthClient> {
    return this._client.request(
      "PATCH",
      "/oauth/clients/{(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)": oauthClientIdentity
      },
      requestBody
    );
  }

  /**
   * Rotate credentials for an OAuth client
   */
  rotateCredentials(
    oauthClientIdentity: string
  ): Promise<HerokuPlatformAPIOAuthClient> {
    return this._client.request(
      "POST",
      "/oauth/clients/{(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)}/actions/rotate-credentials",
      {
        "(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)": oauthClientIdentity
      }
    );
  }
}

export class HerokuPlatformAPIOAuthGrantClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }
}

export interface HerokuPlatformAPIOAuthToken {
  /**
   * current access token
   */
  readonly "access_token": {
    /**
     * seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime
     */
    readonly "expires_in": null | number;

    /**
     * unique identifier of OAuth token
     */
    readonly "id": string;

    /**
     * contents of the token to be used for authorization
     */
    readonly "token": string;
  };

  /**
   * authorization for this set of tokens
   */
  readonly "authorization": {
    /**
     * unique identifier of OAuth authorization
     */
    readonly "id": string;
  };

  /**
   * OAuth client secret used to obtain token
   */
  readonly "client": null | {
    /**
     * secret used to obtain OAuth authorizations under this client
     */
    readonly "secret": string;
  };

  /**
   * when OAuth token was created
   */
  readonly "created_at": string;

  /**
   * grant used on the underlying authorization
   */
  readonly "grant": {
    /**
     * grant code received from OAuth web application authorization
     */
    readonly "code": string;

    /**
     * type of grant requested, one of `authorization_code` or `refresh_token`
     */
    readonly "type": string;
  };

  /**
   * unique identifier of OAuth token
   */
  readonly "id": string;

  /**
   * refresh token for this authorization
   */
  readonly "refresh_token": {
    /**
     * seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime
     */
    readonly "expires_in": null | number;

    /**
     * unique identifier of OAuth token
     */
    readonly "id": string;

    /**
     * contents of the token to be used for authorization
     */
    readonly "token": string;
  };

  /**
   * OAuth session using this token
   */
  readonly "session": {
    /**
     * unique identifier of OAuth token
     */
    readonly "id": string;
  };

  /**
   * when OAuth token was updated
   */
  readonly "updated_at": string;

  /**
   * Reference to the user associated with this token
   */
  readonly "user": {
    /**
     * unique identifier of an account
     */
    readonly "id": string;
  };
}

export class HerokuPlatformAPIOAuthTokenClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new OAuth token.
   */
  create(requestBody: {
    /**
     * 
     */
    readonly "client": {
      /**
       * secret used to obtain OAuth authorizations under this client
       */
      readonly "secret": string;
    };

    /**
     * 
     */
    readonly "grant": {
      /**
       * grant code received from OAuth web application authorization
       */
      readonly "code": string;

      /**
       * type of grant requested, one of `authorization_code` or `refresh_token`
       */
      readonly "type": string;
    };

    /**
     * 
     */
    readonly "refresh_token": {
      /**
       * contents of the token to be used for authorization
       */
      readonly "token": string;
    };
  }): Promise<HerokuPlatformAPIOAuthToken> {
    return this._client.request("POST", "/oauth/tokens", {}, requestBody);
  }

  /**
   * Revoke OAuth access token.
   */
  delete(oauthTokenIdentity: string): Promise<HerokuPlatformAPIOAuthToken> {
    return this._client.request(
      "DELETE",
      "/oauth/tokens/{(%23%2Fdefinitions%2Foauth-token%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Foauth-token%2Fdefinitions%2Fidentity)": oauthTokenIdentity
      }
    );
  }
}

export class HerokuPlatformAPIOrganizationAddOnClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * List add-ons used across all Organization apps
   */
  listForOrganization(
    organizationIdentity: string
  ): Promise<Array<HerokuPlatformAPIAddOn>> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/addons",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIOrganizationAppCollaborator {
  /**
   * app collaborator belongs to
   */
  readonly "app": {
    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * when collaborator was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of collaborator
   */
  readonly "id": string;

  /**
   * role in the organization
   */
  readonly "role": null | string;

  /**
   * when collaborator was updated
   */
  readonly "updated_at": string;

  /**
   * identity of collaborated account
   */
  readonly "user": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * whether the user is federated and belongs to an Identity Provider
     */
    readonly "federated": boolean;

    /**
     * unique identifier of an account
     */
    readonly "id": string;
  };
}

export class HerokuPlatformAPIOrganizationAppCollaboratorClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new collaborator on an organization app. Use this endpoint instead of the `/apps/{app_id_or_name}/collaborator` endpoint when you want the collaborator to be granted [permissions] (https://devcenter.heroku.com/articles/org-users-access#roles-and-app-permissions) according to their role in the organization.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * An array of permissions to give to the collaborator.
       */
      readonly "permissions": Array<string>;

      /**
       * whether to suppress email invitation when creating collaborator
       */
      readonly "silent": boolean;

      /**
       * 
       */
      readonly "user": string;
    }
  ): Promise<HerokuPlatformAPIOrganizationAppCollaborator> {
    return this._client.request(
      "POST",
      "/organizations/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Delete an existing collaborator from an organization app.
   */
  delete(
    organizationAppIdentity: string,
    organizationAppCollaboratorIdentity: string
  ): Promise<HerokuPlatformAPIOrganizationAppCollaborator> {
    return this._client.request(
      "DELETE",
      "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Forganization-app-collaborator%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)": organizationAppIdentity,
        "(%23%2Fdefinitions%2Forganization-app-collaborator%2Fdefinitions%2Fidentity)": organizationAppCollaboratorIdentity
      }
    );
  }

  /**
   * Info for a collaborator on an organization app.
   */
  info(
    organizationAppIdentity: string,
    organizationAppCollaboratorIdentity: string
  ): Promise<HerokuPlatformAPIOrganizationAppCollaborator> {
    return this._client.request(
      "GET",
      "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Forganization-app-collaborator%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)": organizationAppIdentity,
        "(%23%2Fdefinitions%2Forganization-app-collaborator%2Fdefinitions%2Fidentity)": organizationAppCollaboratorIdentity
      }
    );
  }

  /**
   * Update an existing collaborator from an organization app.
   */
  update(
    organizationAppIdentity: string,
    organizationAppCollaboratorIdentity: string,
    requestBody: {
      /**
       * An array of permissions to give to the collaborator.
       */
      readonly "permissions": Array<string>;
    }
  ): Promise<HerokuPlatformAPIOrganizationAppCollaborator> {
    return this._client.request(
      "PATCH",
      "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Forganization-app-collaborator%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)": organizationAppIdentity,
        "(%23%2Fdefinitions%2Forganization-app-collaborator%2Fdefinitions%2Fidentity)": organizationAppCollaboratorIdentity
      },
      requestBody
    );
  }

  /**
   * List collaborators on an organization app.
   */
  list(
    organizationAppIdentity: string
  ): Promise<Array<HerokuPlatformAPIOrganizationAppCollaborator>> {
    return this._client.request(
      "GET",
      "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}/collaborators",
      {
        "(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)": organizationAppIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIOrganizationApp {
  /**
   * when app was archived
   */
  readonly "archived_at": null | string;

  /**
   * description from buildpack of app
   */
  readonly "buildpack_provided_description": null | string;

  /**
   * when app was created
   */
  readonly "created_at": string;

  /**
   * git repo URL of app
   */
  readonly "git_url": string;

  /**
   * unique identifier of app
   */
  readonly "id": string;

  /**
   * is the current member a collaborator on this app.
   */
  readonly "joined": boolean;

  /**
   * are other organization members forbidden from joining this app.
   */
  readonly "locked": boolean;

  /**
   * maintenance status of app
   */
  readonly "maintenance": boolean;

  /**
   * unique name of app
   */
  readonly "name": string;

  /**
   * organization that owns this app
   */
  readonly "organization": null | {
    /**
     * unique name of organization
     */
    readonly "name": string;
  };

  /**
   * identity of app owner
   */
  readonly "owner": null | {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;
  };

  /**
   * identity of app region
   */
  readonly "region": {
    /**
     * unique identifier of region
     */
    readonly "id": string;

    /**
     * unique name of region
     */
    readonly "name": string;
  };

  /**
   * when app was released
   */
  readonly "released_at": null | string;

  /**
   * git repo size in bytes of app
   */
  readonly "repo_size": null | number;

  /**
   * slug size in bytes of app
   */
  readonly "slug_size": null | number;

  /**
   * identity of space
   */
  readonly "space": null | {
    /**
     * unique identifier of space
     */
    readonly "id": string;

    /**
     * unique name of space
     */
    readonly "name": string;
  };

  /**
   * identity of app stack
   */
  readonly "stack": {
    /**
     * unique identifier of stack
     */
    readonly "id": string;

    /**
     * unique name of stack
     */
    readonly "name": string;
  };

  /**
   * when app was updated
   */
  readonly "updated_at": string;

  /**
   * web URL of app
   */
  readonly "web_url": string;
}

export class HerokuPlatformAPIOrganizationAppClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new app in the specified organization, in the default organization if unspecified,  or in personal account, if default organization is not set.
   */
  create(requestBody: {
    /**
     * are other organization members forbidden from joining this app.
     */
    readonly "locked": boolean;

    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique name of organization
     */
    readonly "organization": string;

    /**
     * force creation of the app in the user account even if a default org is set.
     */
    readonly "personal": boolean;

    /**
     * unique name of region
     */
    readonly "region": string;

    /**
     * unique name of space
     */
    readonly "space": string;

    /**
     * unique name of stack
     */
    readonly "stack": string;
  }): Promise<void> {
    return this._client.request("POST", "/organizations/apps", {}, requestBody);
  }

  /**
   * List apps in the default organization, or in personal account, if default organization is not set.
   */
  list(): Promise<Array<HerokuPlatformAPIOrganizationApp>> {
    return this._client.request("GET", "/organizations/apps", {});
  }

  /**
   * List organization apps.
   */
  listForOrganization(
    organizationIdentity: string
  ): Promise<Array<HerokuPlatformAPIOrganizationApp>> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/apps",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      }
    );
  }

  /**
   * Info for an organization app.
   */
  info(organizationAppIdentity: string): Promise<void> {
    return this._client.request(
      "GET",
      "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)": organizationAppIdentity
      }
    );
  }

  /**
   * Lock or unlock an organization app.
   */
  updateLocked(
    organizationAppIdentity: string,
    requestBody: {
      /**
       * are other organization members forbidden from joining this app.
       */
      readonly "locked": boolean;
    }
  ): Promise<HerokuPlatformAPIOrganizationApp> {
    return this._client.request(
      "PATCH",
      "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)": organizationAppIdentity
      },
      requestBody
    );
  }

  /**
   * Transfer an existing organization app to another Heroku account.
   */
  transfertoAccount(
    organizationAppIdentity: string,
    requestBody: {
      /**
       * 
       */
      readonly "owner": string;
    }
  ): Promise<void> {
    return this._client.request(
      "PATCH",
      "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)": organizationAppIdentity
      },
      requestBody
    );
  }

  /**
   * Transfer an existing organization app to another organization.
   */
  transfertoOrganization(
    organizationAppIdentity: string,
    requestBody: {
      /**
       * unique name of organization
       */
      readonly "owner": string;
    }
  ): Promise<HerokuPlatformAPIOrganizationApp> {
    return this._client.request(
      "PATCH",
      "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)": organizationAppIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPIOrganizationFeature {
  /**
   * when organization feature was created
   */
  readonly "created_at": string;

  /**
   * description of organization feature
   */
  readonly "description": string;

  /**
   * documentation URL of organization feature
   */
  readonly "doc_url": string;

  /**
   * whether or not organization feature has been enabled
   */
  readonly "enabled": boolean;

  /**
   * unique identifier of organization feature
   */
  readonly "id": string;

  /**
   * unique name of organization feature
   */
  readonly "name": string;

  /**
   * state of organization feature
   */
  readonly "state": string;

  /**
   * when organization feature was updated
   */
  readonly "updated_at": string;

  /**
   * user readable feature name
   */
  readonly "display_name": string;

  /**
   * e-mail to send feedback about the feature
   */
  readonly "feedback_email": string;
}

export class HerokuPlatformAPIOrganizationFeatureClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for an existing organization feature.
   */
  info(
    organizationIdentity: string,
    organizationFeatureIdentity: string
  ): Promise<HerokuPlatformAPIOrganizationFeature> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/features/{(%23%2Fdefinitions%2Forganization-feature%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity,
        "(%23%2Fdefinitions%2Forganization-feature%2Fdefinitions%2Fidentity)": organizationFeatureIdentity
      }
    );
  }

  /**
   * List existing organization features.
   */
  list(
    organizationIdentity: string
  ): Promise<Array<HerokuPlatformAPIOrganizationFeature>> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/features",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      }
    );
  }

  /**
   * Update an existing organization feature.
   */
  update(
    organizationIdentity: string,
    organizationFeatureIdentity: string,
    requestBody: {
      /**
       * whether or not organization feature has been enabled
       */
      readonly "enabled": boolean;
    }
  ): Promise<HerokuPlatformAPIOrganizationFeature> {
    return this._client.request(
      "PATCH",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/features/{(%23%2Fdefinitions%2Forganization-feature%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity,
        "(%23%2Fdefinitions%2Forganization-feature%2Fdefinitions%2Fidentity)": organizationFeatureIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPIOrganizationInvitation {
  /**
   * when invitation was created
   */
  readonly "created_at": string;

  /**
   * Unique identifier of an invitation
   */
  readonly "id": string;

  /**
   * 
   */
  readonly "invited_by": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;

    /**
     * full name of the account owner
     */
    readonly "name": null | string;
  };

  /**
   * 
   */
  readonly "organization": {
    /**
     * unique identifier of organization
     */
    readonly "id": string;

    /**
     * unique name of organization
     */
    readonly "name": string;
  };

  /**
   * role in the organization
   */
  readonly "role": null | string;

  /**
   * when invitation was updated
   */
  readonly "updated_at": string;

  /**
   * 
   */
  readonly "user": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;

    /**
     * full name of the account owner
     */
    readonly "name": null | string;
  };
}

export interface HerokuPlatformAPIOrganizationMember {
  /**
   * when the membership record was created
   */
  readonly "created_at": string;

  /**
   * email address of the organization member
   */
  readonly "email": string;

  /**
   * whether the user is federated and belongs to an Identity Provider
   */
  readonly "federated": boolean;

  /**
   * unique identifier of organization member
   */
  readonly "id": string;

  /**
   * role in the organization
   */
  readonly "role": null | string;

  /**
   * whether the Enterprise organization member has two factor authentication enabled
   */
  readonly "two_factor_authentication": boolean;

  /**
   * when the membership record was updated
   */
  readonly "updated_at": string;

  /**
   * user information for the membership
   */
  readonly "user": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;

    /**
     * full name of the account owner
     */
    readonly "name": null | string;
  };
}

export class HerokuPlatformAPIOrganizationInvitationClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Get a list of an organization's Identity Providers
   */
  list(
    organizationName: string
  ): Promise<Array<HerokuPlatformAPIOrganizationInvitation>> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fname)}/invitations",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fname)": organizationName
      }
    );
  }

  /**
   * Create Organization Invitation
   */
  create(
    organizationIdentity: string,
    requestBody: {
      /**
       * unique email address of account
       */
      readonly "email": string;

      /**
       * role in the organization
       */
      readonly "role": null | string;
    }
  ): Promise<void> {
    return this._client.request(
      "PUT",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/invitations",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      },
      requestBody
    );
  }

  /**
   * Revoke an organization invitation.
   */
  revoke(
    organizationIdentity: string,
    organizationInvitationIdentity: string
  ): Promise<void> {
    return this._client.request(
      "DELETE",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/invitations/{(%23%2Fdefinitions%2Forganization-invitation%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity,
        "(%23%2Fdefinitions%2Forganization-invitation%2Fdefinitions%2Fidentity)": organizationInvitationIdentity
      }
    );
  }

  /**
   * Get an invitation by its token
   */
  get(
    organizationInvitationToken: string
  ): Promise<HerokuPlatformAPIOrganizationInvitation> {
    return this._client.request(
      "GET",
      "/organizations/invitations/{(%23%2Fdefinitions%2Forganization-invitation%2Fdefinitions%2Ftoken)}",
      {
        "(%23%2Fdefinitions%2Forganization-invitation%2Fdefinitions%2Ftoken)": organizationInvitationToken
      }
    );
  }

  /**
   * Accept Organization Invitation
   */
  accept(
    organizationInvitationToken: string
  ): Promise<HerokuPlatformAPIOrganizationMember> {
    return this._client.request(
      "POST",
      "/organizations/invitations/{(%23%2Fdefinitions%2Forganization-invitation%2Fdefinitions%2Ftoken)}/accept",
      {
        "(%23%2Fdefinitions%2Forganization-invitation%2Fdefinitions%2Ftoken)": organizationInvitationToken
      }
    );
  }
}

export interface HerokuPlatformAPIOrganizationInvoice {
  /**
   * total add-ons charges in on this invoice
   */
  readonly "addons_total": number;

  /**
   * total database charges on this invoice
   */
  readonly "database_total": number;

  /**
   * total charges on this invoice
   */
  readonly "charges_total": number;

  /**
   * when invoice was created
   */
  readonly "created_at": string;

  /**
   * total credits on this invoice
   */
  readonly "credits_total": number;

  /**
   * The total amount of dyno units consumed across dyno types.
   */
  readonly "dyno_units": number;

  /**
   * unique identifier of this invoice
   */
  readonly "id": string;

  /**
   * human readable invoice number
   */
  readonly "number": number;

  /**
   * Status of the invoice payment.
   */
  readonly "payment_status": string;

  /**
   * the ending date that the invoice covers
   */
  readonly "period_end": string;

  /**
   * the starting date that this invoice covers
   */
  readonly "period_start": string;

  /**
   * total platform charges on this invoice
   */
  readonly "platform_total": number;

  /**
   * payment status for this invoice (pending, successful, failed)
   */
  readonly "state": number;

  /**
   * combined total of charges and credits on this invoice
   */
  readonly "total": number;

  /**
   * when invoice was updated
   */
  readonly "updated_at": string;

  /**
   * The total amount of hours consumed across dyno types.
   */
  readonly "weighted_dyno_hours": number;
}

export class HerokuPlatformAPIOrganizationInvoiceClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing invoice.
   */
  info(
    organizationIdentity: string,
    organizationInvoiceIdentity: number
  ): Promise<HerokuPlatformAPIOrganizationInvoice> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/invoices/{(%23%2Fdefinitions%2Forganization-invoice%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity,
        "(%23%2Fdefinitions%2Forganization-invoice%2Fdefinitions%2Fidentity)": organizationInvoiceIdentity
      }
    );
  }

  /**
   * List existing invoices.
   */
  list(
    organizationIdentity: string
  ): Promise<Array<HerokuPlatformAPIOrganizationInvoice>> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/invoices",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      }
    );
  }
}

export class HerokuPlatformAPIOrganizationMemberClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new organization member, or update their role.
   */
  createorUpdate(
    organizationIdentity: string,
    requestBody: {
      /**
       * email address of the organization member
       */
      readonly "email": string;

      /**
       * whether the user is federated and belongs to an Identity Provider
       */
      readonly "federated": boolean;

      /**
       * role in the organization
       */
      readonly "role": null | string;
    }
  ): Promise<HerokuPlatformAPIOrganizationMember> {
    return this._client.request(
      "PUT",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/members",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      },
      requestBody
    );
  }

  /**
   * Create a new organization member.
   */
  create(
    organizationIdentity: string,
    requestBody: {
      /**
       * email address of the organization member
       */
      readonly "email": string;

      /**
       * whether the user is federated and belongs to an Identity Provider
       */
      readonly "federated": boolean;

      /**
       * role in the organization
       */
      readonly "role": null | string;
    }
  ): Promise<HerokuPlatformAPIOrganizationMember> {
    return this._client.request(
      "POST",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/members",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      },
      requestBody
    );
  }

  /**
   * Update an organization member.
   */
  update(
    organizationIdentity: string,
    requestBody: {
      /**
       * email address of the organization member
       */
      readonly "email": string;

      /**
       * whether the user is federated and belongs to an Identity Provider
       */
      readonly "federated": boolean;

      /**
       * role in the organization
       */
      readonly "role": null | string;
    }
  ): Promise<HerokuPlatformAPIOrganizationMember> {
    return this._client.request(
      "PATCH",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/members",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      },
      requestBody
    );
  }

  /**
   * Remove a member from the organization.
   */
  delete(
    organizationIdentity: string,
    organizationMemberIdentity: string
  ): Promise<HerokuPlatformAPIOrganizationMember> {
    return this._client.request(
      "DELETE",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/members/{(%23%2Fdefinitions%2Forganization-member%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity,
        "(%23%2Fdefinitions%2Forganization-member%2Fdefinitions%2Fidentity)": organizationMemberIdentity
      }
    );
  }

  /**
   * List members of the organization.
   */
  list(
    organizationIdentity: string
  ): Promise<Array<HerokuPlatformAPIOrganizationMember>> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/members",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      }
    );
  }

  /**
   * List the apps of a member.
   */
  appList(
    organizationIdentity: string,
    organizationMemberIdentity: string
  ): Promise<Array<HerokuPlatformAPIOrganizationApp>> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/members/{(%23%2Fdefinitions%2Forganization-member%2Fdefinitions%2Fidentity)}/apps",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity,
        "(%23%2Fdefinitions%2Forganization-member%2Fdefinitions%2Fidentity)": organizationMemberIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIOrganizationPreferences {
  /**
   * The default permission used when adding new members to the organization
   */
  readonly "default-permission": null | string;

  /**
   * Whether whitelisting rules should be applied to add-on installations
   */
  readonly "whitelisting-enabled": null | boolean;
}

export class HerokuPlatformAPIOrganizationPreferencesClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Retrieve Organization Preferences
   */
  list(
    organizationPreferencesIdentity: string
  ): Promise<HerokuPlatformAPIOrganizationPreferences> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization-preferences%2Fdefinitions%2Fidentity)}/preferences",
      {
        "(%23%2Fdefinitions%2Forganization-preferences%2Fdefinitions%2Fidentity)": organizationPreferencesIdentity
      }
    );
  }

  /**
   * Update Organization Preferences
   */
  update(
    organizationPreferencesIdentity: string,
    requestBody: {
      /**
       * Whether whitelisting rules should be applied to add-on installations
       */
      readonly "whitelisting-enabled": null | boolean;
    }
  ): Promise<HerokuPlatformAPIOrganizationPreferences> {
    return this._client.request(
      "PATCH",
      "/organizations/{(%23%2Fdefinitions%2Forganization-preferences%2Fdefinitions%2Fidentity)}/preferences",
      {
        "(%23%2Fdefinitions%2Forganization-preferences%2Fdefinitions%2Fidentity)": organizationPreferencesIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPIOrganization {
  /**
   * unique identifier of organization
   */
  readonly "id": string;

  /**
   * when the organization was created
   */
  readonly "created_at": string;

  /**
   * whether charges incurred by the org are paid by credit card.
   */
  readonly "credit_card_collections": boolean;

  /**
   * whether to use this organization when none is specified
   */
  readonly "default": boolean;

  /**
   * upper limit of members allowed in an organization.
   */
  readonly "membership_limit": null | number;

  /**
   * unique name of organization
   */
  readonly "name": string;

  /**
   * whether the org is provisioned licenses by salesforce.
   */
  readonly "provisioned_licenses": boolean;

  /**
   * role in the organization
   */
  readonly "role": null | string;

  /**
   * type of organization.
   */
  readonly "type": string;

  /**
   * when the organization was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIOrganizationClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * List organizations in which you are a member.
   */
  list(): Promise<Array<HerokuPlatformAPIOrganization>> {
    return this._client.request("GET", "/organizations", {});
  }

  /**
   * Info for an organization.
   */
  info(organizationIdentity: string): Promise<void> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      }
    );
  }

  /**
   * Update organization properties.
   */
  update(
    organizationIdentity: string,
    requestBody: {
      /**
       * whether to use this organization when none is specified
       */
      readonly "default": boolean;

      /**
       * unique name of organization
       */
      readonly "name": string;
    }
  ): Promise<HerokuPlatformAPIOrganization> {
    return this._client.request(
      "PATCH",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      },
      requestBody
    );
  }

  /**
   * Create a new organization.
   */
  create(requestBody: {
    /**
     * unique name of organization
     */
    readonly "name": string;

    /**
     * street address line 1
     */
    readonly "address_1": string;

    /**
     * street address line 2
     */
    readonly "address_2": string;

    /**
     * encrypted card number of payment method
     */
    readonly "card_number": string;

    /**
     * city
     */
    readonly "city": string;

    /**
     * country
     */
    readonly "country": string;

    /**
     * card verification value
     */
    readonly "cvv": string;

    /**
     * expiration month
     */
    readonly "expiration_month": string;

    /**
     * expiration year
     */
    readonly "expiration_year": string;

    /**
     * the first name for payment method
     */
    readonly "first_name": string;

    /**
     * the last name for payment method
     */
    readonly "last_name": string;

    /**
     * metadata
     */
    readonly "other": string;

    /**
     * postal code
     */
    readonly "postal_code": string;

    /**
     * state
     */
    readonly "state": string;
  }): Promise<HerokuPlatformAPIOrganization> {
    return this._client.request("POST", "/organizations", {}, requestBody);
  }

  /**
   * Delete an existing organization.
   */
  delete(organizationIdentity: string): Promise<HerokuPlatformAPIOrganization> {
    return this._client.request(
      "DELETE",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIOutboundRuleset {
  /**
   * unique identifier of an outbound-ruleset
   */
  readonly "id": string;

  /**
   * when outbound-ruleset was created
   */
  readonly "created_at": string;

  /**
   * 
   */
  readonly "rules": Array<{
    /**
     * is the target destination in CIDR notation
     */
    readonly "target": string;

    /**
     * an endpoint of communication in an operating system.
     */
    readonly "from_port": number;

    /**
     * an endpoint of communication in an operating system.
     */
    readonly "to_port": number;

    /**
     * formal standards and policies comprised of rules, procedures and formats that define communication between two or more devices over a network
     */
    readonly "protocol": string;
  }>;

  /**
   * unique email address of account
   */
  readonly "created_by": string;
}

export class HerokuPlatformAPIOutboundRulesetClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Current outbound ruleset for a space
   */
  current(spaceIdentity: string): Promise<HerokuPlatformAPIOutboundRuleset> {
    return this._client.request(
      "GET",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/outbound-ruleset",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      }
    );
  }

  /**
   * Info on an existing Outbound Ruleset
   */
  info(
    spaceIdentity: string,
    outboundRulesetIdentity: string
  ): Promise<HerokuPlatformAPIOutboundRuleset> {
    return this._client.request(
      "GET",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/outbound-rulesets/{(%23%2Fdefinitions%2Foutbound-ruleset%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity,
        "(%23%2Fdefinitions%2Foutbound-ruleset%2Fdefinitions%2Fidentity)": outboundRulesetIdentity
      }
    );
  }

  /**
   * List all Outbound Rulesets for a space
   */
  list(
    spaceIdentity: string
  ): Promise<Array<HerokuPlatformAPIOutboundRuleset>> {
    return this._client.request(
      "GET",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/outbound-rulesets",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      }
    );
  }

  /**
   * Create a new outbound ruleset
   */
  create(
    spaceIdentity: string,
    requestBody: {
      /**
       * 
       */
      readonly "rules": Array<{
        /**
         * is the target destination in CIDR notation
         */
        readonly "target": string;

        /**
         * an endpoint of communication in an operating system.
         */
        readonly "from_port": number;

        /**
         * an endpoint of communication in an operating system.
         */
        readonly "to_port": number;

        /**
         * formal standards and policies comprised of rules, procedures and formats that define communication between two or more devices over a network
         */
        readonly "protocol": string;
      }>;
    }
  ): Promise<void> {
    return this._client.request(
      "PUT",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/outbound-ruleset",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      },
      requestBody
    );
  }
}

export class HerokuPlatformAPIPasswordResetClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Reset account's password. This will send a reset password link to the user's email address.
   */
  resetPassword(requestBody: {
    /**
     * unique email address of account
     */
    readonly "email": string;
  }): Promise<void> {
    return this._client.request("POST", "/password-resets", {}, requestBody);
  }

  /**
   * Complete password reset.
   */
  completeResetPassword(
    passwordResetResetpasswordtoken: string,
    requestBody: {
      /**
       * current password on the account
       */
      readonly "password": string;

      /**
       * confirmation of the new password
       */
      readonly "password_confirmation": string;
    }
  ): Promise<void> {
    return this._client.request(
      "POST",
      "/password-resets/{(%23%2Fdefinitions%2Fpassword-reset%2Fdefinitions%2Freset_password_token)}/actions/finalize",
      {
        "(%23%2Fdefinitions%2Fpassword-reset%2Fdefinitions%2Freset_password_token)": passwordResetResetpasswordtoken
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPIOrganizationAppPermission {
  /**
   * The name of the app permission.
   */
  readonly "name": string;

  /**
   * A description of what the app permission allows.
   */
  readonly "description": string;
}

export class HerokuPlatformAPIOrganizationAppPermissionClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Lists permissions available to organizations.
   */
  list(): Promise<Array<HerokuPlatformAPIOrganizationAppPermission>> {
    return this._client.request("GET", "/organizations/permissions", {});
  }
}

export interface HerokuPlatformAPIPipelineCoupling {
  /**
   * app involved in the pipeline coupling
   */
  readonly "app": {
    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * when pipeline coupling was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of pipeline coupling
   */
  readonly "id": string;

  /**
   * pipeline involved in the coupling
   */
  readonly "pipeline": {
    /**
     * unique identifier of pipeline
     */
    readonly "id": string;
  };

  /**
   * target pipeline stage
   */
  readonly "stage": string;

  /**
   * when pipeline coupling was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIPipelineCouplingClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * List couplings for a pipeline
   */
  listByPipeline(
    pipelineId: string
  ): Promise<Array<HerokuPlatformAPIPipelineCoupling>> {
    return this._client.request(
      "GET",
      "/pipelines/{(%23%2Fdefinitions%2Fpipeline%2Fdefinitions%2Fid)}/pipeline-couplings",
      {
        "(%23%2Fdefinitions%2Fpipeline%2Fdefinitions%2Fid)": pipelineId
      }
    );
  }

  /**
   * List pipeline couplings.
   */
  list(): Promise<Array<HerokuPlatformAPIPipelineCoupling>> {
    return this._client.request("GET", "/pipeline-couplings", {});
  }

  /**
   * Create a new pipeline coupling.
   */
  create(requestBody: {
    /**
     * 
     */
    readonly "app": string;

    /**
     * unique identifier of pipeline
     */
    readonly "pipeline": string;

    /**
     * target pipeline stage
     */
    readonly "stage": string;
  }): Promise<HerokuPlatformAPIPipelineCoupling> {
    return this._client.request("POST", "/pipeline-couplings", {}, requestBody);
  }

  /**
   * Info for an existing pipeline coupling.
   */
  info(
    pipelineCouplingIdentity: string
  ): Promise<HerokuPlatformAPIPipelineCoupling> {
    return this._client.request(
      "GET",
      "/pipeline-couplings/{(%23%2Fdefinitions%2Fpipeline-coupling%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fpipeline-coupling%2Fdefinitions%2Fidentity)": pipelineCouplingIdentity
      }
    );
  }

  /**
   * Delete an existing pipeline coupling.
   */
  delete(
    pipelineCouplingIdentity: string
  ): Promise<HerokuPlatformAPIPipelineCoupling> {
    return this._client.request(
      "DELETE",
      "/pipeline-couplings/{(%23%2Fdefinitions%2Fpipeline-coupling%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fpipeline-coupling%2Fdefinitions%2Fidentity)": pipelineCouplingIdentity
      }
    );
  }

  /**
   * Update an existing pipeline coupling.
   */
  update(
    pipelineCouplingIdentity: string,
    requestBody: {
      /**
       * target pipeline stage
       */
      readonly "stage": string;
    }
  ): Promise<HerokuPlatformAPIPipelineCoupling> {
    return this._client.request(
      "PATCH",
      "/pipeline-couplings/{(%23%2Fdefinitions%2Fpipeline-coupling%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fpipeline-coupling%2Fdefinitions%2Fidentity)": pipelineCouplingIdentity
      },
      requestBody
    );
  }

  /**
   * Info for an existing app pipeline coupling.
   */
  infoByApp(appIdentity: string): Promise<HerokuPlatformAPIPipelineCoupling> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/pipeline-couplings",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIPipelinePromotionTarget {
  /**
   * the app which was promoted to
   */
  readonly "app": {
    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * an error message for why the promotion failed
   */
  readonly "error_message": null | string;

  /**
   * unique identifier of promotion target
   */
  readonly "id": string;

  /**
   * the promotion which the target belongs to
   */
  readonly "pipeline_promotion": {
    /**
     * unique identifier of promotion
     */
    readonly "id": string;
  };

  /**
   * the release which was created on the target app
   */
  readonly "release": null | {
    /**
     * unique identifier of release
     */
    readonly "id": string;
  };

  /**
   * status of promotion
   */
  readonly "status": string;
}

export class HerokuPlatformAPIPipelinePromotionTargetClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * List promotion targets belonging to an existing promotion.
   */
  list(
    pipelinePromotionId: string
  ): Promise<Array<HerokuPlatformAPIPipelinePromotionTarget>> {
    return this._client.request(
      "GET",
      "/pipeline-promotions/{(%23%2Fdefinitions%2Fpipeline-promotion%2Fdefinitions%2Fid)}/promotion-targets",
      {
        "(%23%2Fdefinitions%2Fpipeline-promotion%2Fdefinitions%2Fid)": pipelinePromotionId
      }
    );
  }
}

export interface HerokuPlatformAPIPipelinePromotion {
  /**
   * when promotion was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of promotion
   */
  readonly "id": string;

  /**
   * the pipeline which the promotion belongs to
   */
  readonly "pipeline": {
    /**
     * unique identifier of pipeline
     */
    readonly "id": string;
  };

  /**
   * the app being promoted from
   */
  readonly "source": {
    /**
     * the app which was promoted from
     */
    readonly "app": {
      /**
       * unique identifier of app
       */
      readonly "id": string;
    };

    /**
     * the release used to promoted from
     */
    readonly "release": {
      /**
       * unique identifier of release
       */
      readonly "id": string;
    };
  };

  /**
   * status of promotion
   */
  readonly "status": string;

  /**
   * when promotion was updated
   */
  readonly "updated_at": null | string;
}

export class HerokuPlatformAPIPipelinePromotionClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new promotion.
   */
  create(requestBody: {
    /**
     * pipeline involved in the promotion
     */
    readonly "pipeline": {
      /**
       * unique identifier of pipeline
       */
      readonly "id": string;
    };

    /**
     * the app being promoted from
     */
    readonly "source": {
      /**
       * the app which was promoted from
       */
      readonly "app": {
        /**
         * unique identifier of app
         */
        readonly "id": string;
      };
    };

    /**
     * 
     */
    readonly "targets": Array<{
      /**
       * the app is being promoted to
       */
      readonly "app": {
        /**
         * unique identifier of app
         */
        readonly "id": string;
      };
    }>;
  }): Promise<void> {
    return this._client.request(
      "POST",
      "/pipeline-promotions",
      {},
      requestBody
    );
  }

  /**
   * Info for existing pipeline promotion.
   */
  info(
    pipelinePromotionIdentity: string
  ): Promise<HerokuPlatformAPIPipelinePromotion> {
    return this._client.request(
      "GET",
      "/pipeline-promotions/{(%23%2Fdefinitions%2Fpipeline-promotion%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fpipeline-promotion%2Fdefinitions%2Fidentity)": pipelinePromotionIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIPipeline {
  /**
   * when pipeline was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of pipeline
   */
  readonly "id": string;

  /**
   * name of pipeline
   */
  readonly "name": string;

  /**
   * when pipeline was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIPipelineClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new pipeline.
   */
  create(requestBody: {
    /**
     * name of pipeline
     */
    readonly "name": string;
  }): Promise<HerokuPlatformAPIPipeline> {
    return this._client.request("POST", "/pipelines", {}, requestBody);
  }

  /**
   * Info for existing pipeline.
   */
  info(pipelineIdentity: string): Promise<HerokuPlatformAPIPipeline> {
    return this._client.request(
      "GET",
      "/pipelines/{(%23%2Fdefinitions%2Fpipeline%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fpipeline%2Fdefinitions%2Fidentity)": pipelineIdentity
      }
    );
  }

  /**
   * Delete an existing pipeline.
   */
  delete(pipelineId: string): Promise<HerokuPlatformAPIPipeline> {
    return this._client.request(
      "DELETE",
      "/pipelines/{(%23%2Fdefinitions%2Fpipeline%2Fdefinitions%2Fid)}",
      {
        "(%23%2Fdefinitions%2Fpipeline%2Fdefinitions%2Fid)": pipelineId
      }
    );
  }

  /**
   * Update an existing pipeline.
   */
  update(
    pipelineId: string,
    requestBody: {
      /**
       * name of pipeline
       */
      readonly "name": string;
    }
  ): Promise<HerokuPlatformAPIPipeline> {
    return this._client.request(
      "PATCH",
      "/pipelines/{(%23%2Fdefinitions%2Fpipeline%2Fdefinitions%2Fid)}",
      {
        "(%23%2Fdefinitions%2Fpipeline%2Fdefinitions%2Fid)": pipelineId
      },
      requestBody
    );
  }

  /**
   * List existing pipelines.
   */
  list(): Promise<Array<HerokuPlatformAPIPipeline>> {
    return this._client.request("GET", "/pipelines", {});
  }
}

export interface HerokuPlatformAPIPlan {
  /**
   * identity of add-on service
   */
  readonly "addon_service": {
    /**
     * unique identifier of this add-on-service
     */
    readonly "id": string;

    /**
     * unique name of this add-on-service
     */
    readonly "name": string;
  };

  /**
   * when plan was created
   */
  readonly "created_at": string;

  /**
   * the compliance regimes applied to an add-on plan
   */
  readonly "compliance": null | Array<string>;

  /**
   * whether this plan is the default for its add-on service
   */
  readonly "default": boolean;

  /**
   * description of plan
   */
  readonly "description": string;

  /**
   * human readable name of the add-on plan
   */
  readonly "human_name": string;

  /**
   * unique identifier of this plan
   */
  readonly "id": string;

  /**
   * whether this plan is installable to a Private Spaces app
   */
  readonly "installable_inside_private_network": boolean;

  /**
   * whether this plan is installable to a Common Runtime app
   */
  readonly "installable_outside_private_network": boolean;

  /**
   * unique name of this plan
   */
  readonly "name": string;

  /**
   * price
   */
  readonly "price": {
    /**
     * price in cents per unit of plan
     */
    readonly "cents": number;

    /**
     * unit of price for plan
     */
    readonly "unit": string;
  };

  /**
   * whether this plan is the default for apps in Private Spaces
   */
  readonly "space_default": boolean;

  /**
   * release status for plan
   */
  readonly "state": string;

  /**
   * when plan was updated
   */
  readonly "updated_at": string;

  /**
   * whether this plan is publicly visible
   */
  readonly "visible": boolean;
}

export class HerokuPlatformAPIPlanClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing plan.
   */
  info(planIdentity: string): Promise<HerokuPlatformAPIPlan> {
    return this._client.request(
      "GET",
      "/plans/{(%23%2Fdefinitions%2Fplan%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fplan%2Fdefinitions%2Fidentity)": planIdentity
      }
    );
  }

  /**
   * Info for existing plan by Add-on.
   */
  infoByAddOn(
    addOnServiceIdentity: string,
    planIdentity: string
  ): Promise<HerokuPlatformAPIPlan> {
    return this._client.request(
      "GET",
      "/addon-services/{(%23%2Fdefinitions%2Fadd-on-service%2Fdefinitions%2Fidentity)}/plans/{(%23%2Fdefinitions%2Fplan%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fadd-on-service%2Fdefinitions%2Fidentity)": addOnServiceIdentity,
        "(%23%2Fdefinitions%2Fplan%2Fdefinitions%2Fidentity)": planIdentity
      }
    );
  }

  /**
   * List existing plans by Add-on.
   */
  listByAddOn(
    addOnServiceIdentity: string
  ): Promise<Array<HerokuPlatformAPIPlan>> {
    return this._client.request(
      "GET",
      "/addon-services/{(%23%2Fdefinitions%2Fadd-on-service%2Fdefinitions%2Fidentity)}/plans",
      {
        "(%23%2Fdefinitions%2Fadd-on-service%2Fdefinitions%2Fidentity)": addOnServiceIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIRateLimit {
  /**
   * allowed requests remaining in current interval
   */
  readonly "remaining": number;
}

export class HerokuPlatformAPIRateLimitClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for rate limits.
   */
  info(): Promise<HerokuPlatformAPIRateLimit> {
    return this._client.request("GET", "/account/rate-limits", {});
  }
}

export class HerokuPlatformAPIRegionClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing region.
   */
  info(regionIdentity: string): Promise<HerokuPlatformAPIRegion> {
    return this._client.request(
      "GET",
      "/regions/{(%23%2Fdefinitions%2Fregion%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fregion%2Fdefinitions%2Fidentity)": regionIdentity
      }
    );
  }

  /**
   * List existing regions.
   */
  list(): Promise<Array<HerokuPlatformAPIRegion>> {
    return this._client.request("GET", "/regions", {});
  }
}

export interface HerokuPlatformAPIRelease {
  /**
   * add-on plans installed on the app for this release
   */
  readonly "addon_plan_names": Array<string>;

  /**
   * app involved in the release
   */
  readonly "app": {
    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * when release was created
   */
  readonly "created_at": string;

  /**
   * description of changes in this release
   */
  readonly "description": string;

  /**
   * unique identifier of release
   */
  readonly "id": string;

  /**
   * when release was updated
   */
  readonly "updated_at": string;

  /**
   * slug running in this release
   */
  readonly "slug": null | {
    /**
     * unique identifier of slug
     */
    readonly "id": string;
  };

  /**
   * current status of the release
   */
  readonly "status": string;

  /**
   * user that created the release
   */
  readonly "user": {
    /**
     * unique identifier of an account
     */
    readonly "id": string;

    /**
     * unique email address of account
     */
    readonly "email": string;
  };

  /**
   * unique version assigned to the release
   */
  readonly "version": number;

  /**
   * indicates this release as being the current one for the app
   */
  readonly "current": boolean;

  /**
   * Release command output will be available from this URL as a stream. The stream is available as either `text/plain` or `text/event-stream`. Clients should be prepared to handle disconnects and can resume the stream by sending a `Range` header (for `text/plain`) or a `Last-Event-Id` header (for `text/event-stream`).
   */
  readonly "output_stream_url": null | string;
}

export class HerokuPlatformAPIReleaseClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing release.
   */
  info(
    appIdentity: string,
    releaseIdentity: number | string
  ): Promise<HerokuPlatformAPIRelease> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases/{(%23%2Fdefinitions%2Frelease%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Frelease%2Fdefinitions%2Fidentity)": releaseIdentity
      }
    );
  }

  /**
   * List existing releases.
   */
  list(appIdentity: string): Promise<Array<HerokuPlatformAPIRelease>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Create new release.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * description of changes in this release
       */
      readonly "description": string;

      /**
       * 
       */
      readonly "slug": string;
    }
  ): Promise<HerokuPlatformAPIRelease> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Rollback to an existing release.
   */
  rollback(
    appIdentity: string,
    requestBody: {
      /**
       * unique identifier of release
       */
      readonly "release": string;
    }
  ): Promise<HerokuPlatformAPIRelease> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPISlug {
  /**
   * pointer to the url where clients can fetch or store the actual release binary
   */
  readonly "blob": {
    /**
     * method to be used to interact with the slug blob
     */
    readonly "method": string;

    /**
     * URL to interact with the slug blob
     */
    readonly "url": string;
  };

  /**
   * description from buildpack of slug
   */
  readonly "buildpack_provided_description": null | string;

  /**
   * an optional checksum of the slug for verifying its integrity
   */
  readonly "checksum": null | string;

  /**
   * identification of the code with your version control system (eg: SHA of the git HEAD)
   */
  readonly "commit": null | string;

  /**
   * an optional description of the provided commit
   */
  readonly "commit_description": null | string;

  /**
   * when slug was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of slug
   */
  readonly "id": string;

  /**
   * hash mapping process type names to their respective command
   */
  readonly "process_types": {};

  /**
   * size of slug, in bytes
   */
  readonly "size": null | number;

  /**
   * identity of slug stack
   */
  readonly "stack": {
    /**
     * unique identifier of stack
     */
    readonly "id": string;

    /**
     * unique name of stack
     */
    readonly "name": string;
  };

  /**
   * when slug was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPISlugClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing slug.
   */
  info(
    appIdentity: string,
    slugIdentity: string
  ): Promise<HerokuPlatformAPISlug> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/slugs/{(%23%2Fdefinitions%2Fslug%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fslug%2Fdefinitions%2Fidentity)": slugIdentity
      }
    );
  }

  /**
   * Create a new slug. For more information please refer to [Deploying Slugs using the Platform API](https://devcenter.heroku.com/articles/platform-api-deploying-slugs).
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * description from buildpack of slug
       */
      readonly "buildpack_provided_description": null | string;

      /**
       * an optional checksum of the slug for verifying its integrity
       */
      readonly "checksum": null | string;

      /**
       * identification of the code with your version control system (eg: SHA of the git HEAD)
       */
      readonly "commit": null | string;

      /**
       * an optional description of the provided commit
       */
      readonly "commit_description": null | string;

      /**
       * hash mapping process type names to their respective command
       */
      readonly "process_types": {};

      /**
       * 
       */
      readonly "stack": string;
    }
  ): Promise<HerokuPlatformAPISlug> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/slugs",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPISMSNumber {
  /**
   * SMS number of account
   */
  readonly "sms_number": null | string;
}

export class HerokuPlatformAPISMSNumberClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Recover an account using an SMS recovery code
   */
  sMSNumber(accountIdentity: string): Promise<HerokuPlatformAPISMSNumber> {
    return this._client.request(
      "GET",
      "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}/sms-number",
      {
        "(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)": accountIdentity
      }
    );
  }

  /**
   * Recover an account using an SMS recovery code
   */
  recover(accountIdentity: string): Promise<HerokuPlatformAPISMSNumber> {
    return this._client.request(
      "POST",
      "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}/sms-number/actions/recover",
      {
        "(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)": accountIdentity
      }
    );
  }

  /**
   * Confirm an SMS number change with a confirmation code
   */
  confirm(accountIdentity: string): Promise<HerokuPlatformAPISMSNumber> {
    return this._client.request(
      "POST",
      "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}/sms-number/actions/confirm",
      {
        "(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)": accountIdentity
      }
    );
  }
}

export interface HerokuPlatformAPISNIEndpoint {
  /**
   * raw contents of the public certificate chain (eg: .crt or .pem file)
   */
  readonly "certificate_chain": string;

  /**
   * deprecated; refer to GET /apps/:id/domains for valid CNAMEs for this app
   */
  readonly "cname": string;

  /**
   * when endpoint was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of this SNI endpoint
   */
  readonly "id": string;

  /**
   * unique name for SNI endpoint
   */
  readonly "name": string;

  /**
   * when SNI endpoint was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPISNIEndpointClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new SNI endpoint.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * raw contents of the public certificate chain (eg: .crt or .pem file)
       */
      readonly "certificate_chain": string;

      /**
       * contents of the private key (eg .key file)
       */
      readonly "private_key": string;
    }
  ): Promise<HerokuPlatformAPISNIEndpoint> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/sni-endpoints",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Delete existing SNI endpoint.
   */
  delete(
    appIdentity: string,
    sniEndpointIdentity: string
  ): Promise<HerokuPlatformAPISNIEndpoint> {
    return this._client.request(
      "DELETE",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/sni-endpoints/{(%23%2Fdefinitions%2Fsni-endpoint%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fsni-endpoint%2Fdefinitions%2Fidentity)": sniEndpointIdentity
      }
    );
  }

  /**
   * Info for existing SNI endpoint.
   */
  info(
    appIdentity: string,
    sniEndpointIdentity: string
  ): Promise<HerokuPlatformAPISNIEndpoint> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/sni-endpoints/{(%23%2Fdefinitions%2Fsni-endpoint%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fsni-endpoint%2Fdefinitions%2Fidentity)": sniEndpointIdentity
      }
    );
  }

  /**
   * List existing SNI endpoints.
   */
  list(appIdentity: string): Promise<Array<HerokuPlatformAPISNIEndpoint>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/sni-endpoints",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Update an existing SNI endpoint.
   */
  update(
    appIdentity: string,
    sniEndpointIdentity: string,
    requestBody: {
      /**
       * raw contents of the public certificate chain (eg: .crt or .pem file)
       */
      readonly "certificate_chain": string;

      /**
       * contents of the private key (eg .key file)
       */
      readonly "private_key": string;
    }
  ): Promise<HerokuPlatformAPISNIEndpoint> {
    return this._client.request(
      "PATCH",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/sni-endpoints/{(%23%2Fdefinitions%2Fsni-endpoint%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fsni-endpoint%2Fdefinitions%2Fidentity)": sniEndpointIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPISource {
  /**
   * pointer to the URL where clients can fetch or store the source
   */
  readonly "source_blob": {
    /**
     * URL to download the source
     */
    readonly "get_url": string;

    /**
     * URL to upload the source
     */
    readonly "put_url": string;
  };
}

export class HerokuPlatformAPISourceClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create URLs for uploading and downloading source.
   */
  create(): Promise<HerokuPlatformAPISource> {
    return this._client.request("POST", "/sources", {});
  }

  /**
   * Create URLs for uploading and downloading source. Deprecated in favor of `POST /sources`
   */
  createDeprecated(appIdentity: string): Promise<HerokuPlatformAPISource> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/sources",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }
}

export interface HerokuPlatformAPISpaceAccess {
  /**
   * space user belongs to
   */
  readonly "space": {
    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * when space was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of space
   */
  readonly "id": string;

  /**
   * user space permissions
   */
  readonly "permissions": Array<{
    /**
     * 
     */
    readonly "description": string;

    /**
     * 
     */
    readonly "name": string;
  }>;

  /**
   * when space was updated
   */
  readonly "updated_at": string;

  /**
   * identity of user account
   */
  readonly "user": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;
  };
}

export class HerokuPlatformAPISpaceAccessClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * List permissions for a given user on a given space.
   */
  info(
    spaceIdentity: string,
    accountIdentity: string
  ): Promise<HerokuPlatformAPISpaceAccess> {
    return this._client.request(
      "GET",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/members/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity,
        "(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)": accountIdentity
      }
    );
  }

  /**
   * Update an existing user's set of permissions on a space.
   */
  update(
    spaceIdentity: string,
    accountIdentity: string,
    requestBody: {
      /**
       * 
       */
      readonly "permissions": Array<{
        /**
         * 
         */
        readonly "name": string;
      }>;
    }
  ): Promise<HerokuPlatformAPISpaceAccess> {
    return this._client.request(
      "PATCH",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/members/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity,
        "(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)": accountIdentity
      },
      requestBody
    );
  }

  /**
   * List all users and their permissions on a space.
   */
  list(spaceIdentity: string): Promise<Array<HerokuPlatformAPISpaceAccess>> {
    return this._client.request(
      "GET",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/members",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      }
    );
  }
}

export interface HerokuPlatformAPISpaceNetworkAddressTranslation {
  /**
   * when network address translation for a space was created
   */
  readonly "created_at": string;

  /**
   * potential IPs from which outbound network traffic will originate
   */
  readonly "sources": Array<string>;

  /**
   * availability of network address translation for a space
   */
  readonly "state": string;

  /**
   * when network address translation for a space was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPISpaceNetworkAddressTranslationClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Current state of network address translation for a space.
   */
  info(
    spaceIdentity: string
  ): Promise<HerokuPlatformAPISpaceNetworkAddressTranslation> {
    return this._client.request(
      "GET",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}/nat",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      }
    );
  }
}

export interface HerokuPlatformAPISpace {
  /**
   * when space was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of space
   */
  readonly "id": string;

  /**
   * unique name of space
   */
  readonly "name": string;

  /**
   * organization that owns this space
   */
  readonly "organization": {
    /**
     * unique name of organization
     */
    readonly "name": string;
  };

  /**
   * team that owns this space
   */
  readonly "team": {
    /**
     * unique identifier of team
     */
    readonly "id": string;

    /**
     * unique name of team
     */
    readonly "name": string;
  };

  /**
   * identity of space region
   */
  readonly "region": {
    /**
     * unique identifier of region
     */
    readonly "id": string;

    /**
     * unique name of region
     */
    readonly "name": string;
  };

  /**
   * true if this space has shield enabled
   */
  readonly "shield": boolean;

  /**
   * availability of this space
   */
  readonly "state": string;

  /**
   * when space was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPISpaceClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * List existing spaces.
   */
  list(): Promise<Array<HerokuPlatformAPISpace>> {
    return this._client.request("GET", "/spaces", {});
  }

  /**
   * Info for existing space.
   */
  info(spaceIdentity: string): Promise<HerokuPlatformAPISpace> {
    return this._client.request(
      "GET",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      }
    );
  }

  /**
   * Update an existing space.
   */
  update(
    spaceIdentity: string,
    requestBody: {
      /**
       * unique name of space
       */
      readonly "name": string;
    }
  ): Promise<HerokuPlatformAPISpace> {
    return this._client.request(
      "PATCH",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      },
      requestBody
    );
  }

  /**
   * Delete an existing space.
   */
  delete(spaceIdentity: string): Promise<HerokuPlatformAPISpace> {
    return this._client.request(
      "DELETE",
      "/spaces/{(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fspace%2Fdefinitions%2Fidentity)": spaceIdentity
      }
    );
  }

  /**
   * Create a new space.
   */
  create(requestBody: {
    /**
     * unique name of space
     */
    readonly "name": string;

    /**
     * unique name of team
     */
    readonly "team": string;

    /**
     * 
     */
    readonly "region": string;

    /**
     * true if this space has shield enabled
     */
    readonly "shield": boolean;
  }): Promise<HerokuPlatformAPISpace> {
    return this._client.request("POST", "/spaces", {}, requestBody);
  }
}

export interface HerokuPlatformAPISSLEndpoint {
  /**
   * application associated with this ssl-endpoint
   */
  readonly "app": {
    /**
     * unique identifier of app
     */
    readonly "id": string;

    /**
     * unique name of app
     */
    readonly "name": string;
  };

  /**
   * raw contents of the public certificate chain (eg: .crt or .pem file)
   */
  readonly "certificate_chain": string;

  /**
   * canonical name record, the address to point a domain at
   */
  readonly "cname": string;

  /**
   * when endpoint was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of this SSL endpoint
   */
  readonly "id": string;

  /**
   * unique name for SSL endpoint
   */
  readonly "name": string;

  /**
   * when endpoint was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPISSLEndpointClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new SSL endpoint.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * raw contents of the public certificate chain (eg: .crt or .pem file)
       */
      readonly "certificate_chain": string;

      /**
       * allow Heroku to modify an uploaded public certificate chain if deemed advantageous by adding missing intermediaries, stripping unnecessary ones, etc.
       */
      readonly "preprocess": boolean;

      /**
       * contents of the private key (eg .key file)
       */
      readonly "private_key": string;
    }
  ): Promise<HerokuPlatformAPISSLEndpoint> {
    return this._client.request(
      "POST",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Delete existing SSL endpoint.
   */
  delete(
    appIdentity: string,
    sslEndpointIdentity: string
  ): Promise<HerokuPlatformAPISSLEndpoint> {
    return this._client.request(
      "DELETE",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints/{(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)": sslEndpointIdentity
      }
    );
  }

  /**
   * Info for existing SSL endpoint.
   */
  info(
    appIdentity: string,
    sslEndpointIdentity: string
  ): Promise<HerokuPlatformAPISSLEndpoint> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints/{(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)": sslEndpointIdentity
      }
    );
  }

  /**
   * List existing SSL endpoints.
   */
  list(appIdentity: string): Promise<Array<HerokuPlatformAPISSLEndpoint>> {
    return this._client.request(
      "GET",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      }
    );
  }

  /**
   * Update an existing SSL endpoint.
   */
  update(
    appIdentity: string,
    sslEndpointIdentity: string,
    requestBody: {
      /**
       * raw contents of the public certificate chain (eg: .crt or .pem file)
       */
      readonly "certificate_chain": string;

      /**
       * allow Heroku to modify an uploaded public certificate chain if deemed advantageous by adding missing intermediaries, stripping unnecessary ones, etc.
       */
      readonly "preprocess": boolean;

      /**
       * contents of the private key (eg .key file)
       */
      readonly "private_key": string;

      /**
       * indicates that a rollback should be performed
       */
      readonly "rollback": boolean;
    }
  ): Promise<HerokuPlatformAPISSLEndpoint> {
    return this._client.request(
      "PATCH",
      "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints/{(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity,
        "(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)": sslEndpointIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPIStack {
  /**
   * when stack was introduced
   */
  readonly "created_at": string;

  /**
   * unique identifier of stack
   */
  readonly "id": string;

  /**
   * unique name of stack
   */
  readonly "name": string;

  /**
   * availability of this stack: beta, deprecated or public
   */
  readonly "state": string;

  /**
   * when stack was last modified
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPIStackClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Stack info.
   */
  info(stackIdentity: string): Promise<HerokuPlatformAPIStack> {
    return this._client.request(
      "GET",
      "/stacks/{(%23%2Fdefinitions%2Fstack%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fstack%2Fdefinitions%2Fidentity)": stackIdentity
      }
    );
  }

  /**
   * List available stacks.
   */
  list(): Promise<Array<HerokuPlatformAPIStack>> {
    return this._client.request("GET", "/stacks", {});
  }
}

export interface HerokuPlatformAPITeamAppCollaborator {
  /**
   * app collaborator belongs to
   */
  readonly "app": {
    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique identifier of app
     */
    readonly "id": string;
  };

  /**
   * when collaborator was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of collaborator
   */
  readonly "id": string;

  /**
   * role in the team
   */
  readonly "role": null | string;

  /**
   * when collaborator was updated
   */
  readonly "updated_at": string;

  /**
   * identity of collaborated account
   */
  readonly "user": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * whether the user is federated and belongs to an Identity Provider
     */
    readonly "federated": boolean;

    /**
     * unique identifier of an account
     */
    readonly "id": string;
  };
}

export class HerokuPlatformAPITeamAppCollaboratorClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new collaborator on a team app. Use this endpoint instead of the `/apps/{app_id_or_name}/collaborator` endpoint when you want the collaborator to be granted [permissions] (https://devcenter.heroku.com/articles/org-users-access#roles-and-app-permissions) according to their role in the team.
   */
  create(
    appIdentity: string,
    requestBody: {
      /**
       * An array of permissions to give to the collaborator.
       */
      readonly "permissions": Array<string>;

      /**
       * whether to suppress email invitation when creating collaborator
       */
      readonly "silent": boolean;

      /**
       * 
       */
      readonly "user": string;
    }
  ): Promise<HerokuPlatformAPITeamAppCollaborator> {
    return this._client.request(
      "POST",
      "/teams/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators",
      {
        "(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)": appIdentity
      },
      requestBody
    );
  }

  /**
   * Delete an existing collaborator from a team app.
   */
  delete(
    teamAppIdentity: string,
    teamAppCollaboratorIdentity: string
  ): Promise<HerokuPlatformAPITeamAppCollaborator> {
    return this._client.request(
      "DELETE",
      "/teams/apps/{(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Fteam-app-collaborator%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)": teamAppIdentity,
        "(%23%2Fdefinitions%2Fteam-app-collaborator%2Fdefinitions%2Fidentity)": teamAppCollaboratorIdentity
      }
    );
  }

  /**
   * Info for a collaborator on a team app.
   */
  info(
    teamAppIdentity: string,
    teamAppCollaboratorIdentity: string
  ): Promise<HerokuPlatformAPITeamAppCollaborator> {
    return this._client.request(
      "GET",
      "/teams/apps/{(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Fteam-app-collaborator%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)": teamAppIdentity,
        "(%23%2Fdefinitions%2Fteam-app-collaborator%2Fdefinitions%2Fidentity)": teamAppCollaboratorIdentity
      }
    );
  }

  /**
   * Update an existing collaborator from a team app.
   */
  update(
    teamAppIdentity: string,
    teamAppCollaboratorIdentity: string,
    requestBody: {
      /**
       * An array of permissions to give to the collaborator.
       */
      readonly "permissions": Array<string>;
    }
  ): Promise<HerokuPlatformAPITeamAppCollaborator> {
    return this._client.request(
      "PATCH",
      "/teams/apps/{(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Fteam-app-collaborator%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)": teamAppIdentity,
        "(%23%2Fdefinitions%2Fteam-app-collaborator%2Fdefinitions%2Fidentity)": teamAppCollaboratorIdentity
      },
      requestBody
    );
  }

  /**
   * List collaborators on a team app.
   */
  list(
    teamAppIdentity: string
  ): Promise<Array<HerokuPlatformAPITeamAppCollaborator>> {
    return this._client.request(
      "GET",
      "/teams/apps/{(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)}/collaborators",
      {
        "(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)": teamAppIdentity
      }
    );
  }
}

export class HerokuPlatformAPITeamAppPermissionClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Lists permissions available to teams.
   */
  list(): Promise<Array<HerokuPlatformAPITeamAppPermission>> {
    return this._client.request("GET", "/teams/permissions", {});
  }
}

export class HerokuPlatformAPITeamAppClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new app in the specified team, in the default team if unspecified, or in personal account, if default team is not set.
   */
  create(requestBody: {
    /**
     * are other team members forbidden from joining this app.
     */
    readonly "locked": boolean;

    /**
     * unique name of app
     */
    readonly "name": string;

    /**
     * unique name of team
     */
    readonly "team": string;

    /**
     * force creation of the app in the user account even if a default team is set.
     */
    readonly "personal": boolean;

    /**
     * unique name of region
     */
    readonly "region": string;

    /**
     * unique name of space
     */
    readonly "space": string;

    /**
     * unique name of stack
     */
    readonly "stack": string;
  }): Promise<void> {
    return this._client.request("POST", "/teams/apps", {}, requestBody);
  }

  /**
   * List apps in the default team, or in personal account, if default team is not set.
   */
  list(): Promise<Array<HerokuPlatformAPITeamApp>> {
    return this._client.request("GET", "/teams/apps", {});
  }

  /**
   * Info for a team app.
   */
  info(teamAppIdentity: string): Promise<void> {
    return this._client.request(
      "GET",
      "/teams/apps/{(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)": teamAppIdentity
      }
    );
  }

  /**
   * Lock or unlock a team app.
   */
  updateLocked(
    teamAppIdentity: string,
    requestBody: {
      /**
       * are other team members forbidden from joining this app.
       */
      readonly "locked": boolean;
    }
  ): Promise<HerokuPlatformAPITeamApp> {
    return this._client.request(
      "PATCH",
      "/teams/apps/{(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)": teamAppIdentity
      },
      requestBody
    );
  }

  /**
   * Transfer an existing team app to another Heroku account.
   */
  transfertoAccount(
    teamAppIdentity: string,
    requestBody: {
      /**
       * 
       */
      readonly "owner": string;
    }
  ): Promise<void> {
    return this._client.request(
      "PATCH",
      "/teams/apps/{(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)": teamAppIdentity
      },
      requestBody
    );
  }

  /**
   * Transfer an existing team app to another team.
   */
  transfertoTeam(
    teamAppIdentity: string,
    requestBody: {
      /**
       * unique name of team
       */
      readonly "owner": string;
    }
  ): Promise<HerokuPlatformAPITeamApp> {
    return this._client.request(
      "PATCH",
      "/teams/apps/{(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam-app%2Fdefinitions%2Fidentity)": teamAppIdentity
      },
      requestBody
    );
  }

  /**
   * List team apps.
   */
  listByTeam(teamIdentity: string): Promise<Array<HerokuPlatformAPITeamApp>> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/apps",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      }
    );
  }
}

export interface HerokuPlatformAPITeamFeature {
  /**
   * when team feature was created
   */
  readonly "created_at": string;

  /**
   * description of team feature
   */
  readonly "description": string;

  /**
   * documentation URL of team feature
   */
  readonly "doc_url": string;

  /**
   * whether or not team feature has been enabled
   */
  readonly "enabled": boolean;

  /**
   * unique identifier of team feature
   */
  readonly "id": string;

  /**
   * unique name of team feature
   */
  readonly "name": string;

  /**
   * state of team feature
   */
  readonly "state": string;

  /**
   * when team feature was updated
   */
  readonly "updated_at": string;

  /**
   * user readable feature name
   */
  readonly "display_name": string;

  /**
   * e-mail to send feedback about the feature
   */
  readonly "feedback_email": string;
}

export class HerokuPlatformAPITeamFeatureClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for an existing team feature.
   */
  info(
    teamIdentity: string,
    teamFeatureIdentity: string
  ): Promise<HerokuPlatformAPITeamFeature> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/features/{(%23%2Fdefinitions%2Fteam-feature%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity,
        "(%23%2Fdefinitions%2Fteam-feature%2Fdefinitions%2Fidentity)": teamFeatureIdentity
      }
    );
  }

  /**
   * List existing team features.
   */
  list(teamIdentity: string): Promise<Array<HerokuPlatformAPITeamFeature>> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/features",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      }
    );
  }
}

export interface HerokuPlatformAPITeamInvitation {
  /**
   * when invitation was created
   */
  readonly "created_at": string;

  /**
   * unique identifier of an invitation
   */
  readonly "id": string;

  /**
   * 
   */
  readonly "invited_by": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;

    /**
     * full name of the account owner
     */
    readonly "name": null | string;
  };

  /**
   * 
   */
  readonly "team": {
    /**
     * unique identifier of team
     */
    readonly "id": string;

    /**
     * unique name of team
     */
    readonly "name": string;
  };

  /**
   * role in the team
   */
  readonly "role": null | string;

  /**
   * when invitation was updated
   */
  readonly "updated_at": string;

  /**
   * 
   */
  readonly "user": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;

    /**
     * full name of the account owner
     */
    readonly "name": null | string;
  };
}

export interface HerokuPlatformAPITeamMember {
  /**
   * when the membership record was created
   */
  readonly "created_at": string;

  /**
   * email address of the team member
   */
  readonly "email": string;

  /**
   * whether the user is federated and belongs to an Identity Provider
   */
  readonly "federated": boolean;

  /**
   * unique identifier of the team member
   */
  readonly "id": string;

  /**
   * role in the team
   */
  readonly "role": null | string;

  /**
   * whether the Enterprise team member has two factor authentication enabled
   */
  readonly "two_factor_authentication": boolean;

  /**
   * when the membership record was updated
   */
  readonly "updated_at": string;

  /**
   * user information for the membership
   */
  readonly "user": {
    /**
     * unique email address of account
     */
    readonly "email": string;

    /**
     * unique identifier of an account
     */
    readonly "id": string;

    /**
     * full name of the account owner
     */
    readonly "name": null | string;
  };
}

export class HerokuPlatformAPITeamInvitationClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Get a list of a team's Identity Providers
   */
  list(teamName: string): Promise<Array<HerokuPlatformAPITeamInvitation>> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fname)}/invitations",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fname)": teamName
      }
    );
  }

  /**
   * Create Team Invitation
   */
  create(
    teamIdentity: string,
    requestBody: {
      /**
       * unique email address of account
       */
      readonly "email": string;

      /**
       * role in the team
       */
      readonly "role": null | string;
    }
  ): Promise<void> {
    return this._client.request(
      "PUT",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/invitations",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      },
      requestBody
    );
  }

  /**
   * Revoke a team invitation.
   */
  revoke(teamIdentity: string, teamInvitationIdentity: string): Promise<void> {
    return this._client.request(
      "DELETE",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/invitations/{(%23%2Fdefinitions%2Fteam-invitation%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity,
        "(%23%2Fdefinitions%2Fteam-invitation%2Fdefinitions%2Fidentity)": teamInvitationIdentity
      }
    );
  }

  /**
   * Get an invitation by its token
   */
  get(teamInvitationToken: string): Promise<HerokuPlatformAPITeamInvitation> {
    return this._client.request(
      "GET",
      "/teams/invitations/{(%23%2Fdefinitions%2Fteam-invitation%2Fdefinitions%2Ftoken)}",
      {
        "(%23%2Fdefinitions%2Fteam-invitation%2Fdefinitions%2Ftoken)": teamInvitationToken
      }
    );
  }

  /**
   * Accept Team Invitation
   */
  accept(teamInvitationToken: string): Promise<HerokuPlatformAPITeamMember> {
    return this._client.request(
      "POST",
      "/teams/invitations/{(%23%2Fdefinitions%2Fteam-invitation%2Fdefinitions%2Ftoken)}/accept",
      {
        "(%23%2Fdefinitions%2Fteam-invitation%2Fdefinitions%2Ftoken)": teamInvitationToken
      }
    );
  }
}

export interface HerokuPlatformAPITeamInvoice {
  /**
   * total add-ons charges in on this invoice
   */
  readonly "addons_total": number;

  /**
   * total database charges on this invoice
   */
  readonly "database_total": number;

  /**
   * total charges on this invoice
   */
  readonly "charges_total": number;

  /**
   * when invoice was created
   */
  readonly "created_at": string;

  /**
   * total credits on this invoice
   */
  readonly "credits_total": number;

  /**
   * total amount of dyno units consumed across dyno types.
   */
  readonly "dyno_units": number;

  /**
   * unique identifier of this invoice
   */
  readonly "id": string;

  /**
   * human readable invoice number
   */
  readonly "number": number;

  /**
   * status of the invoice payment
   */
  readonly "payment_status": string;

  /**
   * the ending date that the invoice covers
   */
  readonly "period_end": string;

  /**
   * the starting date that this invoice covers
   */
  readonly "period_start": string;

  /**
   * total platform charges on this invoice
   */
  readonly "platform_total": number;

  /**
   * payment status for this invoice (pending, successful, failed)
   */
  readonly "state": number;

  /**
   * combined total of charges and credits on this invoice
   */
  readonly "total": number;

  /**
   * when invoice was updated
   */
  readonly "updated_at": string;

  /**
   * The total amount of hours consumed across dyno types.
   */
  readonly "weighted_dyno_hours": number;
}

export class HerokuPlatformAPITeamInvoiceClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Info for existing invoice.
   */
  info(
    teamIdentity: string,
    teamInvoiceIdentity: number
  ): Promise<HerokuPlatformAPITeamInvoice> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/invoices/{(%23%2Fdefinitions%2Fteam-invoice%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity,
        "(%23%2Fdefinitions%2Fteam-invoice%2Fdefinitions%2Fidentity)": teamInvoiceIdentity
      }
    );
  }

  /**
   * List existing invoices.
   */
  list(teamIdentity: string): Promise<Array<HerokuPlatformAPITeamInvoice>> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/invoices",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      }
    );
  }
}

export class HerokuPlatformAPITeamMemberClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Create a new team member, or update their role.
   */
  createorUpdate(
    teamIdentity: string,
    requestBody: {
      /**
       * email address of the team member
       */
      readonly "email": string;

      /**
       * whether the user is federated and belongs to an Identity Provider
       */
      readonly "federated": boolean;

      /**
       * role in the team
       */
      readonly "role": null | string;
    }
  ): Promise<HerokuPlatformAPITeamMember> {
    return this._client.request(
      "PUT",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/members",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      },
      requestBody
    );
  }

  /**
   * Create a new team member.
   */
  create(
    teamIdentity: string,
    requestBody: {
      /**
       * email address of the team member
       */
      readonly "email": string;

      /**
       * whether the user is federated and belongs to an Identity Provider
       */
      readonly "federated": boolean;

      /**
       * role in the team
       */
      readonly "role": null | string;
    }
  ): Promise<HerokuPlatformAPITeamMember> {
    return this._client.request(
      "POST",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/members",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      },
      requestBody
    );
  }

  /**
   * Update a team member.
   */
  update(
    teamIdentity: string,
    requestBody: {
      /**
       * email address of the team member
       */
      readonly "email": string;

      /**
       * whether the user is federated and belongs to an Identity Provider
       */
      readonly "federated": boolean;

      /**
       * role in the team
       */
      readonly "role": null | string;
    }
  ): Promise<HerokuPlatformAPITeamMember> {
    return this._client.request(
      "PATCH",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/members",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      },
      requestBody
    );
  }

  /**
   * Remove a member from the team.
   */
  delete(
    teamIdentity: string,
    teamMemberIdentity: string
  ): Promise<HerokuPlatformAPITeamMember> {
    return this._client.request(
      "DELETE",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/members/{(%23%2Fdefinitions%2Fteam-member%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity,
        "(%23%2Fdefinitions%2Fteam-member%2Fdefinitions%2Fidentity)": teamMemberIdentity
      }
    );
  }

  /**
   * List members of the team.
   */
  list(teamIdentity: string): Promise<Array<HerokuPlatformAPITeamMember>> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/members",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      }
    );
  }

  /**
   * List the apps of a team member.
   */
  listByMember(
    teamIdentity: string,
    teamMemberIdentity: string
  ): Promise<Array<HerokuPlatformAPITeamApp>> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/members/{(%23%2Fdefinitions%2Fteam-member%2Fdefinitions%2Fidentity)}/apps",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity,
        "(%23%2Fdefinitions%2Fteam-member%2Fdefinitions%2Fidentity)": teamMemberIdentity
      }
    );
  }
}

export interface HerokuPlatformAPITeamPreferences {
  /**
   * The default permission used when adding new members to the team
   */
  readonly "default-permission": null | string;

  /**
   * Whether whitelisting rules should be applied to add-on installations
   */
  readonly "whitelisting-enabled": null | boolean;
}

export class HerokuPlatformAPITeamPreferencesClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Retrieve Team Preferences
   */
  list(
    teamPreferencesIdentity: string
  ): Promise<HerokuPlatformAPITeamPreferences> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam-preferences%2Fdefinitions%2Fidentity)}/preferences",
      {
        "(%23%2Fdefinitions%2Fteam-preferences%2Fdefinitions%2Fidentity)": teamPreferencesIdentity
      }
    );
  }

  /**
   * Update Team Preferences
   */
  update(
    teamPreferencesIdentity: string,
    requestBody: {
      /**
       * Whether whitelisting rules should be applied to add-on installations
       */
      readonly "whitelisting-enabled": null | boolean;
    }
  ): Promise<HerokuPlatformAPITeamPreferences> {
    return this._client.request(
      "PATCH",
      "/teams/{(%23%2Fdefinitions%2Fteam-preferences%2Fdefinitions%2Fidentity)}/preferences",
      {
        "(%23%2Fdefinitions%2Fteam-preferences%2Fdefinitions%2Fidentity)": teamPreferencesIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPITeam {
  /**
   * unique identifier of team
   */
  readonly "id": string;

  /**
   * when the team was created
   */
  readonly "created_at": string;

  /**
   * whether charges incurred by the team are paid by credit card.
   */
  readonly "credit_card_collections": boolean;

  /**
   * whether to use this team when none is specified
   */
  readonly "default": boolean;

  /**
   * upper limit of members allowed in a team.
   */
  readonly "membership_limit": null | number;

  /**
   * unique name of team
   */
  readonly "name": string;

  /**
   * whether the team is provisioned licenses by salesforce.
   */
  readonly "provisioned_licenses": boolean;

  /**
   * role in the team
   */
  readonly "role": null | string;

  /**
   * type of team.
   */
  readonly "type": string;

  /**
   * when the team was updated
   */
  readonly "updated_at": string;
}

export class HerokuPlatformAPITeamClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * List teams in which you are a member.
   */
  list(): Promise<Array<HerokuPlatformAPITeam>> {
    return this._client.request("GET", "/teams", {});
  }

  /**
   * Info for a team.
   */
  info(teamIdentity: string): Promise<void> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      }
    );
  }

  /**
   * Update team properties.
   */
  update(
    teamIdentity: string,
    requestBody: {
      /**
       * whether to use this team when none is specified
       */
      readonly "default": boolean;

      /**
       * unique name of team
       */
      readonly "name": string;
    }
  ): Promise<HerokuPlatformAPITeam> {
    return this._client.request(
      "PATCH",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      },
      requestBody
    );
  }

  /**
   * Create a new team.
   */
  create(requestBody: {
    /**
     * unique name of team
     */
    readonly "name": string;

    /**
     * street address line 1
     */
    readonly "address_1": string;

    /**
     * street address line 2
     */
    readonly "address_2": string;

    /**
     * encrypted card number of payment method
     */
    readonly "card_number": string;

    /**
     * city
     */
    readonly "city": string;

    /**
     * country
     */
    readonly "country": string;

    /**
     * card verification value
     */
    readonly "cvv": string;

    /**
     * expiration month
     */
    readonly "expiration_month": string;

    /**
     * expiration year
     */
    readonly "expiration_year": string;

    /**
     * the first name for payment method
     */
    readonly "first_name": string;

    /**
     * the last name for payment method
     */
    readonly "last_name": string;

    /**
     * metadata
     */
    readonly "other": string;

    /**
     * postal code
     */
    readonly "postal_code": string;

    /**
     * state
     */
    readonly "state": string;
  }): Promise<HerokuPlatformAPITeam> {
    return this._client.request("POST", "/teams", {}, requestBody);
  }

  /**
   * Delete an existing team.
   */
  delete(teamIdentity: string): Promise<HerokuPlatformAPITeam> {
    return this._client.request(
      "DELETE",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      }
    );
  }
}

export interface HerokuPlatformAPIUserPreferences {
  /**
   * User's default timezone
   */
  readonly "timezone": null | string;

  /**
   * User's default organization
   */
  readonly "default-organization": null | string;

  /**
   * Whether the user has dismissed the GitHub link banner
   */
  readonly "dismissed-github-banner": null | boolean;

  /**
   * Whether the user has dismissed the getting started banner
   */
  readonly "dismissed-getting-started": null | boolean;

  /**
   * Whether the user has dismissed the Organization Access Controls banner
   */
  readonly "dismissed-org-access-controls": null | boolean;

  /**
   * Whether the user has dismissed the Organization Wizard
   */
  readonly "dismissed-org-wizard-notification": null | boolean;

  /**
   * Whether the user has dismissed the Pipelines banner
   */
  readonly "dismissed-pipelines-banner": null | boolean;

  /**
   * Whether the user has dismissed the GitHub banner on a pipeline overview
   */
  readonly "dismissed-pipelines-github-banner": null | boolean;

  /**
   * Which pipeline uuids the user has dismissed the GitHub banner for
   */
  readonly "dismissed-pipelines-github-banners": null | Array<string>;

  /**
   * Whether the user has dismissed the 2FA SMS banner
   */
  readonly "dismissed-sms-banner": null | boolean;
}

export class HerokuPlatformAPIUserPreferencesClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * Retrieve User Preferences
   */
  list(
    userPreferencesIdentity: string
  ): Promise<HerokuPlatformAPIUserPreferences> {
    return this._client.request(
      "GET",
      "/users/{(%23%2Fdefinitions%2Fuser-preferences%2Fdefinitions%2Fidentity)}/preferences",
      {
        "(%23%2Fdefinitions%2Fuser-preferences%2Fdefinitions%2Fidentity)": userPreferencesIdentity
      }
    );
  }

  /**
   * Update User Preferences
   */
  update(
    userPreferencesIdentity: string,
    requestBody: {
      /**
       * User's default timezone
       */
      readonly "timezone": null | string;

      /**
       * User's default organization
       */
      readonly "default-organization": null | string;

      /**
       * Whether the user has dismissed the GitHub link banner
       */
      readonly "dismissed-github-banner": null | boolean;

      /**
       * Whether the user has dismissed the getting started banner
       */
      readonly "dismissed-getting-started": null | boolean;

      /**
       * Whether the user has dismissed the Organization Access Controls banner
       */
      readonly "dismissed-org-access-controls": null | boolean;

      /**
       * Whether the user has dismissed the Organization Wizard
       */
      readonly "dismissed-org-wizard-notification": null | boolean;

      /**
       * Whether the user has dismissed the Pipelines banner
       */
      readonly "dismissed-pipelines-banner": null | boolean;

      /**
       * Whether the user has dismissed the GitHub banner on a pipeline overview
       */
      readonly "dismissed-pipelines-github-banner": null | boolean;

      /**
       * Which pipeline uuids the user has dismissed the GitHub banner for
       */
      readonly "dismissed-pipelines-github-banners": null | Array<string>;

      /**
       * Whether the user has dismissed the 2FA SMS banner
       */
      readonly "dismissed-sms-banner": null | boolean;
    }
  ): Promise<HerokuPlatformAPIUserPreferences> {
    return this._client.request(
      "PATCH",
      "/users/{(%23%2Fdefinitions%2Fuser-preferences%2Fdefinitions%2Fidentity)}/preferences",
      {
        "(%23%2Fdefinitions%2Fuser-preferences%2Fdefinitions%2Fidentity)": userPreferencesIdentity
      },
      requestBody
    );
  }
}

export interface HerokuPlatformAPIWhitelistedEntity {
  /**
   * when the add-on service was whitelisted
   */
  readonly "added_at": string;

  /**
   * the user which whitelisted the Add-on Service
   */
  readonly "added_by": {
    /**
     * unique email address of account
     */
    readonly "email": null | string;

    /**
     * unique identifier of an account
     */
    readonly "id": null | string;
  };

  /**
   * the Add-on Service whitelisted for use
   */
  readonly "addon_service": {
    /**
     * unique identifier of this add-on-service
     */
    readonly "id": string;

    /**
     * unique name of this add-on-service
     */
    readonly "name": string;

    /**
     * human-readable name of the add-on service provider
     */
    readonly "human_name": string;
  };

  /**
   * unique identifier for this whitelisting entity
   */
  readonly "id": string;
}

export class HerokuPlatformAPIWhitelistedEntityClient {
  private readonly _client: BaseHerokuAPIClient;

  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
  }

  /**
   * List all whitelisted Add-on Services for an Organization
   */
  listByOrganization(
    organizationIdentity: string
  ): Promise<Array<HerokuPlatformAPIWhitelistedEntity>> {
    return this._client.request(
      "GET",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/whitelisted-addon-services",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      }
    );
  }

  /**
   * Whitelist an Add-on Service
   */
  createByOrganization(
    organizationIdentity: string,
    requestBody: {
      /**
       * name of the Add-on to whitelist
       */
      readonly "addon_service": string;
    }
  ): Promise<Array<HerokuPlatformAPIWhitelistedEntity>> {
    return this._client.request(
      "POST",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/whitelisted-addon-services",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity
      },
      requestBody
    );
  }

  /**
   * Remove a whitelisted entity
   */
  deleteByOrganization(
    organizationIdentity: string,
    whitelistedAddOnServiceIdentity: string
  ): Promise<HerokuPlatformAPIWhitelistedEntity> {
    return this._client.request(
      "DELETE",
      "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/whitelisted-addon-services/{(%23%2Fdefinitions%2Fwhitelisted-add-on-service%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)": organizationIdentity,
        "(%23%2Fdefinitions%2Fwhitelisted-add-on-service%2Fdefinitions%2Fidentity)": whitelistedAddOnServiceIdentity
      }
    );
  }

  /**
   * List all whitelisted Add-on Services for a Team
   */
  listByTeam(
    teamIdentity: string
  ): Promise<Array<HerokuPlatformAPIWhitelistedEntity>> {
    return this._client.request(
      "GET",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/whitelisted-addon-services",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      }
    );
  }

  /**
   * Whitelist an Add-on Service
   */
  createByTeam(
    teamIdentity: string,
    requestBody: {
      /**
       * name of the Add-on to whitelist
       */
      readonly "addon_service": string;
    }
  ): Promise<Array<HerokuPlatformAPIWhitelistedEntity>> {
    return this._client.request(
      "POST",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/whitelisted-addon-services",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity
      },
      requestBody
    );
  }

  /**
   * Remove a whitelisted entity
   */
  deleteByTeam(
    teamIdentity: string,
    whitelistedAddOnServiceIdentity: string
  ): Promise<HerokuPlatformAPIWhitelistedEntity> {
    return this._client.request(
      "DELETE",
      "/teams/{(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)}/whitelisted-addon-services/{(%23%2Fdefinitions%2Fwhitelisted-add-on-service%2Fdefinitions%2Fidentity)}",
      {
        "(%23%2Fdefinitions%2Fteam%2Fdefinitions%2Fidentity)": teamIdentity,
        "(%23%2Fdefinitions%2Fwhitelisted-add-on-service%2Fdefinitions%2Fidentity)": whitelistedAddOnServiceIdentity
      }
    );
  }
}

export class HerokuPlatformAPIClient {
  private readonly _client: BaseHerokuAPIClient;
  readonly accountFeature: HerokuPlatformAPIAccountFeatureClient;
  readonly account: HerokuPlatformAPIAccountClient;
  readonly addOnAction: HerokuPlatformAPIAddOnActionClient;
  readonly addOnAttachment: HerokuPlatformAPIAddOnAttachmentClient;
  readonly addOnConfig: HerokuPlatformAPIAddOnConfigClient;
  readonly addOnPlanAction: HerokuPlatformAPIAddOnPlanActionClient;
  readonly addOnRegionCapability: HerokuPlatformAPIAddOnRegionCapabilityClient;
  readonly addOnService: HerokuPlatformAPIAddOnServiceClient;
  readonly addOn: HerokuPlatformAPIAddOnClient;
  readonly appFeature: HerokuPlatformAPIAppFeatureClient;
  readonly appFormationSet: HerokuPlatformAPIApplicationFormationSetClient;
  readonly appSetup: HerokuSetupAPIAppSetupClient;
  readonly appTransfer: HerokuPlatformAPIAppTransferClient;
  readonly app: HerokuPlatformAPIAppClient;
  readonly buildResult: HerokuBuildAPIBuildResultClient;
  readonly build: HerokuBuildAPIBuildClient;
  readonly buildpackInstallation: HerokuPlatformAPIBuildpackInstallationsClient;
  readonly collaborator: HerokuPlatformAPICollaboratorClient;
  readonly configVar: HerokuPlatformAPIConfigVarsClient;
  readonly credit: HerokuPlatformAPICreditClient;
  readonly domain: HerokuPlatformAPIDomainClient;
  readonly dynoSize: HerokuPlatformAPIDynoSizeClient;
  readonly dyno: HerokuPlatformAPIDynoClient;
  readonly event: HerokuPlatformAPIEventClient;
  readonly failedEvent: HerokuPlatformAPIFailedEventClient;
  readonly filterApps: HerokuPlatformAPIFiltersClient;
  readonly formation: HerokuPlatformAPIFormationClient;
  readonly identityProvider: HerokuPlatformAPIIdentityProviderClient;
  readonly inboundRuleset: HerokuPlatformAPIInboundRulesetClient;
  readonly invitation: HerokuPlatformAPIInvitationClient;
  readonly invoiceAddress: HerokuVaultAPIInvoiceAddressClient;
  readonly invoice: HerokuPlatformAPIInvoiceClient;
  readonly key: HerokuPlatformAPIKeyClient;
  readonly logDrain: HerokuPlatformAPILogDrainClient;
  readonly logSession: HerokuPlatformAPILogSessionClient;
  readonly oauthAuthorization: HerokuPlatformAPIOAuthAuthorizationClient;
  readonly oauthClient: HerokuPlatformAPIOAuthClientClient;
  readonly oauthGrant: HerokuPlatformAPIOAuthGrantClient;
  readonly oauthToken: HerokuPlatformAPIOAuthTokenClient;
  readonly organizationAddOn: HerokuPlatformAPIOrganizationAddOnClient;
  readonly organizationAppCollaborator: HerokuPlatformAPIOrganizationAppCollaboratorClient;
  readonly organizationApp: HerokuPlatformAPIOrganizationAppClient;
  readonly organizationFeature: HerokuPlatformAPIOrganizationFeatureClient;
  readonly organizationInvitation: HerokuPlatformAPIOrganizationInvitationClient;
  readonly organizationInvoice: HerokuPlatformAPIOrganizationInvoiceClient;
  readonly organizationMember: HerokuPlatformAPIOrganizationMemberClient;
  readonly organizationPreferences: HerokuPlatformAPIOrganizationPreferencesClient;
  readonly organization: HerokuPlatformAPIOrganizationClient;
  readonly outboundRuleset: HerokuPlatformAPIOutboundRulesetClient;
  readonly passwordReset: HerokuPlatformAPIPasswordResetClient;
  readonly organizationAppPermission: HerokuPlatformAPIOrganizationAppPermissionClient;
  readonly pipelineCoupling: HerokuPlatformAPIPipelineCouplingClient;
  readonly pipelinePromotionTarget: HerokuPlatformAPIPipelinePromotionTargetClient;
  readonly pipelinePromotion: HerokuPlatformAPIPipelinePromotionClient;
  readonly pipeline: HerokuPlatformAPIPipelineClient;
  readonly plan: HerokuPlatformAPIPlanClient;
  readonly rateLimit: HerokuPlatformAPIRateLimitClient;
  readonly region: HerokuPlatformAPIRegionClient;
  readonly release: HerokuPlatformAPIReleaseClient;
  readonly slug: HerokuPlatformAPISlugClient;
  readonly smsNumber: HerokuPlatformAPISMSNumberClient;
  readonly sniEndpoint: HerokuPlatformAPISNIEndpointClient;
  readonly source: HerokuPlatformAPISourceClient;
  readonly spaceAppAccess: HerokuPlatformAPISpaceAccessClient;
  readonly spaceNat: HerokuPlatformAPISpaceNetworkAddressTranslationClient;
  readonly space: HerokuPlatformAPISpaceClient;
  readonly sslEndpoint: HerokuPlatformAPISSLEndpointClient;
  readonly stack: HerokuPlatformAPIStackClient;
  readonly teamAppCollaborator: HerokuPlatformAPITeamAppCollaboratorClient;
  readonly teamAppPermission: HerokuPlatformAPITeamAppPermissionClient;
  readonly teamApp: HerokuPlatformAPITeamAppClient;
  readonly teamFeature: HerokuPlatformAPITeamFeatureClient;
  readonly teamInvitation: HerokuPlatformAPITeamInvitationClient;
  readonly teamInvoice: HerokuPlatformAPITeamInvoiceClient;
  readonly teamMember: HerokuPlatformAPITeamMemberClient;
  readonly teamPreferences: HerokuPlatformAPITeamPreferencesClient;
  readonly team: HerokuPlatformAPITeamClient;
  readonly userPreferences: HerokuPlatformAPIUserPreferencesClient;
  readonly whitelistedAddOnService: HerokuPlatformAPIWhitelistedEntityClient;
  constructor(client: BaseHerokuAPIClient) {
    this._client = client;
    this.accountFeature = new HerokuPlatformAPIAccountFeatureClient(client);
    this.account = new HerokuPlatformAPIAccountClient(client);
    this.addOnAction = new HerokuPlatformAPIAddOnActionClient(client);
    this.addOnAttachment = new HerokuPlatformAPIAddOnAttachmentClient(client);
    this.addOnConfig = new HerokuPlatformAPIAddOnConfigClient(client);
    this.addOnPlanAction = new HerokuPlatformAPIAddOnPlanActionClient(client);
    this.addOnRegionCapability = new HerokuPlatformAPIAddOnRegionCapabilityClient(
      client
    );
    this.addOnService = new HerokuPlatformAPIAddOnServiceClient(client);
    this.addOn = new HerokuPlatformAPIAddOnClient(client);
    this.appFeature = new HerokuPlatformAPIAppFeatureClient(client);
    this.appFormationSet = new HerokuPlatformAPIApplicationFormationSetClient(
      client
    );
    this.appSetup = new HerokuSetupAPIAppSetupClient(client);
    this.appTransfer = new HerokuPlatformAPIAppTransferClient(client);
    this.app = new HerokuPlatformAPIAppClient(client);
    this.buildResult = new HerokuBuildAPIBuildResultClient(client);
    this.build = new HerokuBuildAPIBuildClient(client);
    this.buildpackInstallation = new HerokuPlatformAPIBuildpackInstallationsClient(
      client
    );
    this.collaborator = new HerokuPlatformAPICollaboratorClient(client);
    this.configVar = new HerokuPlatformAPIConfigVarsClient(client);
    this.credit = new HerokuPlatformAPICreditClient(client);
    this.domain = new HerokuPlatformAPIDomainClient(client);
    this.dynoSize = new HerokuPlatformAPIDynoSizeClient(client);
    this.dyno = new HerokuPlatformAPIDynoClient(client);
    this.event = new HerokuPlatformAPIEventClient(client);
    this.failedEvent = new HerokuPlatformAPIFailedEventClient(client);
    this.filterApps = new HerokuPlatformAPIFiltersClient(client);
    this.formation = new HerokuPlatformAPIFormationClient(client);
    this.identityProvider = new HerokuPlatformAPIIdentityProviderClient(client);
    this.inboundRuleset = new HerokuPlatformAPIInboundRulesetClient(client);
    this.invitation = new HerokuPlatformAPIInvitationClient(client);
    this.invoiceAddress = new HerokuVaultAPIInvoiceAddressClient(client);
    this.invoice = new HerokuPlatformAPIInvoiceClient(client);
    this.key = new HerokuPlatformAPIKeyClient(client);
    this.logDrain = new HerokuPlatformAPILogDrainClient(client);
    this.logSession = new HerokuPlatformAPILogSessionClient(client);
    this.oauthAuthorization = new HerokuPlatformAPIOAuthAuthorizationClient(
      client
    );
    this.oauthClient = new HerokuPlatformAPIOAuthClientClient(client);
    this.oauthGrant = new HerokuPlatformAPIOAuthGrantClient(client);
    this.oauthToken = new HerokuPlatformAPIOAuthTokenClient(client);
    this.organizationAddOn = new HerokuPlatformAPIOrganizationAddOnClient(
      client
    );
    this.organizationAppCollaborator = new HerokuPlatformAPIOrganizationAppCollaboratorClient(
      client
    );
    this.organizationApp = new HerokuPlatformAPIOrganizationAppClient(client);
    this.organizationFeature = new HerokuPlatformAPIOrganizationFeatureClient(
      client
    );
    this.organizationInvitation = new HerokuPlatformAPIOrganizationInvitationClient(
      client
    );
    this.organizationInvoice = new HerokuPlatformAPIOrganizationInvoiceClient(
      client
    );
    this.organizationMember = new HerokuPlatformAPIOrganizationMemberClient(
      client
    );
    this.organizationPreferences = new HerokuPlatformAPIOrganizationPreferencesClient(
      client
    );
    this.organization = new HerokuPlatformAPIOrganizationClient(client);
    this.outboundRuleset = new HerokuPlatformAPIOutboundRulesetClient(client);
    this.passwordReset = new HerokuPlatformAPIPasswordResetClient(client);
    this.organizationAppPermission = new HerokuPlatformAPIOrganizationAppPermissionClient(
      client
    );
    this.pipelineCoupling = new HerokuPlatformAPIPipelineCouplingClient(client);
    this.pipelinePromotionTarget = new HerokuPlatformAPIPipelinePromotionTargetClient(
      client
    );
    this.pipelinePromotion = new HerokuPlatformAPIPipelinePromotionClient(
      client
    );
    this.pipeline = new HerokuPlatformAPIPipelineClient(client);
    this.plan = new HerokuPlatformAPIPlanClient(client);
    this.rateLimit = new HerokuPlatformAPIRateLimitClient(client);
    this.region = new HerokuPlatformAPIRegionClient(client);
    this.release = new HerokuPlatformAPIReleaseClient(client);
    this.slug = new HerokuPlatformAPISlugClient(client);
    this.smsNumber = new HerokuPlatformAPISMSNumberClient(client);
    this.sniEndpoint = new HerokuPlatformAPISNIEndpointClient(client);
    this.source = new HerokuPlatformAPISourceClient(client);
    this.spaceAppAccess = new HerokuPlatformAPISpaceAccessClient(client);
    this.spaceNat = new HerokuPlatformAPISpaceNetworkAddressTranslationClient(
      client
    );
    this.space = new HerokuPlatformAPISpaceClient(client);
    this.sslEndpoint = new HerokuPlatformAPISSLEndpointClient(client);
    this.stack = new HerokuPlatformAPIStackClient(client);
    this.teamAppCollaborator = new HerokuPlatformAPITeamAppCollaboratorClient(
      client
    );
    this.teamAppPermission = new HerokuPlatformAPITeamAppPermissionClient(
      client
    );
    this.teamApp = new HerokuPlatformAPITeamAppClient(client);
    this.teamFeature = new HerokuPlatformAPITeamFeatureClient(client);
    this.teamInvitation = new HerokuPlatformAPITeamInvitationClient(client);
    this.teamInvoice = new HerokuPlatformAPITeamInvoiceClient(client);
    this.teamMember = new HerokuPlatformAPITeamMemberClient(client);
    this.teamPreferences = new HerokuPlatformAPITeamPreferencesClient(client);
    this.team = new HerokuPlatformAPITeamClient(client);
    this.userPreferences = new HerokuPlatformAPIUserPreferencesClient(client);
    this.whitelistedAddOnService = new HerokuPlatformAPIWhitelistedEntityClient(
      client
    );
  }
}

export default HerokuPlatformAPIClient;
