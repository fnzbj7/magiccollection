import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
    ComponentRef,
    Type,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DomService {
    // eslint-disable-next-line @typescript-eslint/ban-types
    private childComponentRef?: ComponentRef<unknown>;
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
    ) {}

    // eslint-disable-next-line @typescript-eslint/ban-types
    public appendComponentTo<T, S, Z>(
        parentId: string,
        child: Type<T>,
        childConfig?: ChildConfig<S, Z>,
    ) {
        // Create a component reference from the component
        const childComponentRef = this.componentFactoryResolver
            .resolveComponentFactory(child)
            .create(this.injector);

        // Attach the config to the child (inputs and outputs)
        this.attachConfig(childConfig, childComponentRef);

        this.childComponentRef = childComponentRef;
        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(childComponentRef.hostView);

        // Get DOM element from component
        const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<unknown>)
            .rootNodes[0] as HTMLElement;

        // Append DOM element to the body
        const parent = document.getElementById(parentId);
        if (parent !== null) {
            parent.appendChild(childDomElem);
        }
    }

    public removeComponent() {
        if (this.childComponentRef) {
            this.appRef.detachView(this.childComponentRef.hostView);
            this.childComponentRef.destroy();
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    private attachConfig<T, S, Z>(
        config: ChildConfig<S, Z> | undefined,
        componentRef: ComponentRef<T>,
    ) {
        if (config) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const inputs = config.inputs as any;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const outputs = config.outputs as any;
            // eslint-disable-next-line guard-for-in
            for (const key in Object.keys(inputs)) {
                const keyStr = key as string;
                if (inputs.hasOwnProperty(keyStr)) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (componentRef.instance as any)[keyStr] = (inputs as any)[keyStr];
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            for (const key in outputs) {
                if (outputs.hasOwnProperty(key)) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (componentRef.instance as any)[key] = (outputs as any)[key];
                }
            }
        }
    }
}

interface ChildConfig<S, Z> {
    inputs: S;
    outputs: Z;
}
