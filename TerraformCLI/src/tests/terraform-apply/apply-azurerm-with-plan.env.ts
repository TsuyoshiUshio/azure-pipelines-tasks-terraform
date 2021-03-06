import { command } from "azure-pipelines-task-lib";

let environmentServiceName = "dev";
let subscriptionId: string = "sub1";
let tenantId: string = "ten1";
let servicePrincipalId: string = "servicePrincipal1";
let servicePrincipalKey: string = "servicePrincipalKey123";

let expectedEnv: { [key: string]: string } = {
    'ARM_SUBSCRIPTION_ID': subscriptionId,
    'ARM_TENANT_ID': tenantId,
    'ARM_CLIENT_ID': servicePrincipalId,
    'ARM_CLIENT_SECRET': servicePrincipalKey,
}

const terraformCommand: string = "apply";
const plan: string = "terraform.tfplan"
const secureVarsFile: string = 'foo.vars';
const commandOptions: string = `${plan}`;
const expectedOptions: string = `-var-file=${secureVarsFile} -auto-approve ${plan}`;
const expectedCommand: string = `${terraformCommand} ${expectedOptions}`

export let env: any = {
    taskScenarioPath:           require.resolve('./apply-azurerm-with-plan'),
    terraformCommand:           terraformCommand,
    commandOptions:             commandOptions,
    plan:                       plan,
    secureVarsFile:             secureVarsFile,
    expectedOptions:            expectedOptions,
    expectedCommand:            expectedCommand,
    environmentServiceName:     environmentServiceName,
    subscriptionId:             subscriptionId,
    tenantId:                   tenantId,
    servicePrincipalId:         servicePrincipalId,
    servicePrincipalKey:        servicePrincipalKey,
    expectedEnv:                expectedEnv
}