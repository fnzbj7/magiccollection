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
    private childComponentRef?: ComponentRef<unknown>;
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
    ) {}

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

    private attachConfig<T, S, Z>(
        config: ChildConfig<S, Z> | undefined,
        componentRef: ComponentRef<T>,
    ) {
        if (config) {
            const inputs = config.inputs;
            const outputs = config.outputs;

            for (const key in inputs) {
                if (Object.prototype.hasOwnProperty.call(inputs, key)) {
                    const unknInstance = componentRef.instance as unknown;
                    (unknInstance as S)[key] = inputs[key];
                }
            }

            for (const key in outputs) {
                if (Object.prototype.hasOwnProperty.call(outputs, key)) {
                    const unknInstance = componentRef.instance as unknown;
                    (unknInstance as Z)[key] = outputs[key];
                }
            }
        }
    }
}

interface ChildConfig<S, Z> {
    inputs: S;
    outputs: Z;
}
